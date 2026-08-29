import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { Server } from 'node:http';
import { AddressInfo } from 'node:net';
import app from '../src/app';
import { Company, Holding, sequelize, User } from '../src/models';
import { COMPANY_VALUE_MAX, COMPANY_VALUE_MIN } from '../src/models/Company';
import { INITIAL_BALANCE } from '../src/models/User';

type Json = Record<string, any>;

interface MockCompany {
  id: string;
  name: string;
  symbol: string;
  description: string;
  sector: string;
  logoUrl: string | null;
  marketCap: number;
  isPublic: boolean;
  creatorId: string | null;
  save: () => Promise<void>;
  destroy: () => Promise<void>;
  toJSON: () => Json;
}

interface MockHolding {
  id: string;
  userId: string;
  companyId: string;
  company?: MockCompany;
  destroy: () => Promise<void>;
}

interface MockUser {
  id: string;
  username: string;
  password: string;
  balance: number;
  validatePassword: (password: string) => Promise<boolean>;
  toSafeObject: () => Json;
  save: () => Promise<void>;
  destroy: () => Promise<void>;
  get: (key: string) => unknown;
}

const users = new Map<string, MockUser>();
const companies = new Map<string, MockCompany>();
const holdings = new Map<string, MockHolding>();

function makeUser(username: string, password: string, balance = INITIAL_BALANCE): MockUser {
  const user: MockUser = {
    id: randomUUID(),
    username,
    password,
    balance,
    validatePassword: async (candidate) => candidate === user.password,
    toSafeObject: () => ({ id: user.id, username: user.username, balance: user.balance }),
    save: async () => {},
    destroy: async () => {
      users.delete(user.id);
    },
    get: (key) => (key === 'holdings' ? holdingsForUser(user.id) : (user as any)[key]),
  };
  users.set(user.id, user);
  return user;
}

function makeCompany(overrides: Partial<MockCompany> = {}): MockCompany {
  const company: MockCompany = {
    id: randomUUID(),
    name: 'Apple Inc.',
    symbol: 'AAPL',
    description: 'Constituyente del S&P 500. Sector: Technology Hardware, Storage & Peripherals.',
    sector: 'Technology Hardware, Storage & Peripherals',
    logoUrl: null,
    marketCap: 3000,
    isPublic: true,
    creatorId: null,
    save: async () => {},
    destroy: async () => {
      companies.delete(company.id);
    },
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        symbol: this.symbol,
        description: this.description,
        sector: this.sector,
        logoUrl: this.logoUrl,
        marketCap: this.marketCap,
        isPublic: this.isPublic,
        creatorId: this.creatorId,
      };
    },
    ...overrides,
  };
  company.symbol = company.symbol.trim().toUpperCase();
  companies.set(company.id, company);
  return company;
}

function makeHolding(userId: string, companyId: string): MockHolding {
  const holding: MockHolding = {
    id: randomUUID(),
    userId,
    companyId,
    destroy: async () => {
      holdings.delete(holding.id);
    },
  };
  holdings.set(holding.id, holding);
  return holding;
}

function holdingsForUser(userId: string): MockHolding[] {
  return [...holdings.values()]
    .filter((holding) => holding.userId === userId)
    .map((holding) => ({ ...holding, company: companies.get(holding.companyId) }));
}

function installModelMocks() {
  const transaction = { LOCK: { UPDATE: 'UPDATE' } };

  (sequelize as any).transaction = async (callback: (transaction: any) => unknown) => callback(transaction);
  (User as any).findOne = async ({ where }: { where: { username: string } }) =>
    [...users.values()].find((user) => user.username === where.username) || null;
  (User as any).findByPk = async (id: string) => users.get(id) || null;
  (User as any).findAll = async () => [...users.values()];
  (User as any).create = async ({ username, password }: { username: string; password: string }) =>
    makeUser(username, password);
  (User as any).update = async (values: Partial<MockUser>) => {
    for (const user of users.values()) Object.assign(user, values);
  };

  (Company as any).findAndCountAll = async ({ where = {}, limit = 10, offset = 0 }: any) => {
    const rows = [...companies.values()]
      .filter((company) => where.isPublic === undefined || company.isPublic === where.isPublic)
      .sort((a, b) => a.symbol.localeCompare(b.symbol));
    return { count: rows.length, rows: rows.slice(offset, offset + limit) };
  };
  (Company as any).findByPk = async (id: string) => companies.get(id) || null;
  (Company as any).create = async (input: Partial<MockCompany>) => makeCompany(input);
  (Company as any).findAll = async ({ where = {} }: any = {}) =>
    [...companies.values()]
      .filter((company) => where.isPublic === undefined || company.isPublic === where.isPublic)
      .sort((a, b) => b.marketCap - a.marketCap);
  (Company as any).update = async (values: Partial<MockCompany>, { where }: { where: Partial<MockCompany> }) => {
    for (const company of companies.values()) {
      if (where.creatorId === undefined || company.creatorId === where.creatorId) Object.assign(company, values);
    }
  };

  (Holding as any).findOne = async ({ where }: { where: { userId: string; companyId: string } }) =>
    [...holdings.values()].find((holding) => holding.userId === where.userId && holding.companyId === where.companyId) || null;
  (Holding as any).findAll = async ({ where }: { where: { userId: string } }) => holdingsForUser(where.userId);
  (Holding as any).create = async ({ userId, companyId }: { userId: string; companyId: string }) =>
    makeHolding(userId, companyId);
  (Holding as any).destroy = async ({ where }: { where: Partial<MockHolding> }) => {
    for (const holding of [...holdings.values()]) {
      const matchesUser = where.userId === undefined || holding.userId === where.userId;
      const matchesCompany = where.companyId === undefined || holding.companyId === where.companyId;
      if (matchesUser && matchesCompany) holdings.delete(holding.id);
    }
  };
}

async function listen(): Promise<Server> {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

async function request(baseUrl: string, method: string, path: string, body?: Json, token?: string) {
  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      ...(body ? { 'content-type': 'application/json' } : {}),
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: response.status, body: response.status === 204 ? {} : ((await response.json()) as Json) };
}

async function main() {
  process.env.JWT_SECRET = 'api-selfcheck-secret';
  installModelMocks();
  makeCompany();

  const server = await listen();
  const baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;

  try {
    const health = await request(baseUrl, 'GET', '/api/health');
    assert.deepEqual(health.body, { status: 'ok' });

    const loginA = await request(baseUrl, 'POST', '/api/login', { username: ' ana ', password: '123456' });
    const tokenA = loginA.body.token as string;
    assert.equal(loginA.status, 200);
    assert.equal(loginA.body.user.username, 'ana');
    assert.equal(loginA.body.user.balance, INITIAL_BALANCE);
    assert.equal('password' in loginA.body.user, false);

    const badPassword = await request(baseUrl, 'POST', '/api/login', { username: 'ana', password: 'bad' });
    assert.equal(badPassword.status, 401);

    const loginB = await request(baseUrl, 'POST', '/api/login', { username: 'benja', password: '123456' });
    const tokenB = loginB.body.token as string;
    assert.equal(loginB.status, 200);

    const me = await request(baseUrl, 'GET', '/api/me', undefined, tokenA);
    assert.equal(me.body.username, 'ana');
    assert.equal('password' in me.body, false);

    const updatedMe = await request(baseUrl, 'PATCH', '/api/me', { username: 'ana2' }, tokenA);
    assert.equal(updatedMe.status, 200);
    assert.equal(updatedMe.body.username, 'ana2');

    const listed = await request(baseUrl, 'GET', '/api/companies?isPublic=true');
    assert.equal(listed.status, 200);
    assert.equal(listed.body.data[0].marketCap, 3000);

    const created = await request(
      baseUrl,
      'POST',
      '/api/companies',
      {
        name: 'DCC Robotics',
        symbol: 'dccr',
        description: 'Empresa ficticia de robots educativos.',
        sector: 'Tecnologia',
        isPublic: false,
      },
      tokenA
    );
    assert.equal(created.status, 201);
    assert.equal(created.body.company.symbol, 'DCCR');
    assert.equal(created.body.company.isPublic, false);
    assert.ok(created.body.company.marketCap >= COMPANY_VALUE_MIN && created.body.company.marketCap <= COMPANY_VALUE_MAX);
    assert.equal(created.body.balance, INITIAL_BALANCE);

    const companyId = created.body.company.id as string;
    const published = await request(baseUrl, 'POST', `/api/companies/${companyId}/publish`, undefined, tokenA);
    assert.equal(published.status, 200);
    assert.equal(published.body.company.isPublic, true);

    const bought = await request(baseUrl, 'POST', `/api/companies/${companyId}/buy`, undefined, tokenB);
    assert.equal(bought.status, 200);
    assert.equal(bought.body.totalPrice, created.body.company.marketCap);
    assert.equal(bought.body.balance, INITIAL_BALANCE - created.body.company.marketCap);

    const duplicateBuy = await request(baseUrl, 'POST', `/api/companies/${companyId}/buy`, undefined, tokenB);
    assert.equal(duplicateBuy.status, 400);

    const donated = await request(baseUrl, 'POST', `/api/companies/${companyId}/donate`, { amount: 1000 }, tokenB);
    assert.equal(donated.status, 200);
    assert.equal(donated.body.company.marketCap, created.body.company.marketCap + 1000);

    const portfolioB = await request(baseUrl, 'GET', '/api/portfolio', undefined, tokenB);
    assert.equal(portfolioB.status, 200);
    assert.equal(portfolioB.body.companies[0].value, created.body.company.marketCap + 1000);
    assert.equal(portfolioB.body.netWorth, INITIAL_BALANCE);

    const sold = await request(baseUrl, 'POST', `/api/companies/${companyId}/sell`, undefined, tokenB);
    assert.equal(sold.status, 200);
    assert.equal(sold.body.totalPrice, created.body.company.marketCap + 1000);
    assert.equal(sold.body.balance, INITIAL_BALANCE);

    const patchedCompany = await request(baseUrl, 'PATCH', `/api/companies/${companyId}`, { name: 'DCC Robotics Lab' }, tokenA);
    assert.equal(patchedCompany.status, 200);
    assert.equal(patchedCompany.body.company.name, 'DCC Robotics Lab');

    const userRankings = await request(baseUrl, 'GET', '/api/rankings/users');
    assert.equal(userRankings.status, 200);
    assert.deepEqual(
      userRankings.body.data.map((user: Json) => user.username),
      ['ana2', 'benja']
    );

    const companyRankings = await request(baseUrl, 'GET', '/api/rankings/companies');
    assert.equal(companyRankings.status, 200);
    assert.equal(typeof companyRankings.body.data[0].marketCap, 'number');

    const unauthorized = await request(baseUrl, 'POST', `/api/companies/${companyId}/buy`);
    assert.equal(unauthorized.status, 401);

    const deletedCompany = await request(baseUrl, 'DELETE', `/api/companies/${companyId}`, undefined, tokenA);
    assert.equal(deletedCompany.status, 204);

    const deletedUser = await request(baseUrl, 'DELETE', '/api/me', undefined, tokenB);
    assert.equal(deletedUser.status, 204);
  } finally {
    server.close();
  }
}

main().then(() => {
  console.log('api self-check ok');
});
