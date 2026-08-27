import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { Server } from 'node:http';
import { AddressInfo } from 'node:net';
import app from '../src/app';
import { Company, Holding, sequelize, User } from '../src/models';

type Json = Record<string, any>;

interface MockCompany {
  id: string;
  name: string;
  symbol: string;
  description: string;
  sector: string;
  logoUrl: string | null;
  marketCap: number;
  totalShares: number;
  availableShares: number;
  isPublic: boolean;
  creatorId: string | null;
  save: () => Promise<void>;
  toJSON: () => Json;
}

interface MockHolding {
  id: string;
  userId: string;
  companyId: string;
  shares: number;
  company?: MockCompany;
  save: () => Promise<void>;
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
  get: (key: string) => unknown;
}

const users = new Map<string, MockUser>();
const companies = new Map<string, MockCompany>();
const holdings = new Map<string, MockHolding>();

function makeUser(username: string, password: string, balance = 10000): MockUser {
  const user: MockUser = {
    id: randomUUID(),
    username,
    password,
    balance,
    validatePassword: async (candidate) => candidate === user.password,
    toSafeObject: () => ({ id: user.id, username: user.username, balance: user.balance }),
    save: async () => {},
    get: (key) => (key === 'holdings' ? holdingsForUser(user.id) : (user as any)[key]),
  };
  users.set(user.id, user);
  return user;
}

function makeCompany(overrides: Partial<MockCompany> = {}): MockCompany {
  const company: MockCompany = {
    id: randomUUID(),
    name: 'Andes Solar Labs',
    symbol: 'ASL',
    description: 'Empresa educativa del sector Energia.',
    sector: 'Energia',
    logoUrl: null,
    marketCap: 900000,
    totalShares: 900,
    availableShares: 900,
    isPublic: true,
    creatorId: null,
    save: async () => {},
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        symbol: this.symbol,
        description: this.description,
        sector: this.sector,
        logoUrl: this.logoUrl,
        marketCap: this.marketCap,
        totalShares: this.totalShares,
        availableShares: this.availableShares,
        isPublic: this.isPublic,
        creatorId: this.creatorId,
        sharePrice: Math.floor(this.marketCap / this.totalShares),
      };
    },
    ...overrides,
  };
  company.symbol = company.symbol.trim().toUpperCase();
  companies.set(company.id, company);
  return company;
}

function makeHolding(userId: string, companyId: string, shares: number): MockHolding {
  const holding: MockHolding = {
    id: randomUUID(),
    userId,
    companyId,
    shares,
    save: async () => {},
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

  (Holding as any).findOne = async ({ where }: { where: { userId: string; companyId: string } }) =>
    [...holdings.values()].find((holding) => holding.userId === where.userId && holding.companyId === where.companyId) || null;
  (Holding as any).findAll = async ({ where }: { where: { userId: string } }) => holdingsForUser(where.userId);
  (Holding as any).create = async ({ userId, companyId, shares }: { userId: string; companyId: string; shares: number }) =>
    makeHolding(userId, companyId, shares);
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
  return { status: response.status, body: (await response.json()) as Json };
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
    assert.equal('password' in loginA.body.user, false);

    const badPassword = await request(baseUrl, 'POST', '/api/login', { username: 'ana', password: 'bad' });
    assert.equal(badPassword.status, 401);

    const loginB = await request(baseUrl, 'POST', '/api/login', { username: 'benja', password: '123456' });
    const tokenB = loginB.body.token as string;
    assert.equal(loginB.status, 200);

    const me = await request(baseUrl, 'GET', '/api/me', undefined, tokenA);
    assert.equal(me.body.username, 'ana');
    assert.equal('password' in me.body, false);

    const listed = await request(baseUrl, 'GET', '/api/companies?isPublic=true');
    assert.equal(listed.status, 200);
    assert.equal(listed.body.data[0].sharePrice, 1000);

    const created = await request(
      baseUrl,
      'POST',
      '/api/companies',
      {
        name: 'DCC Robotics',
        symbol: 'dccr',
        description: 'Empresa ficticia de robots educativos.',
        sector: 'Tecnologia',
        initialCapital: 5000,
        totalShares: 100,
      },
      tokenA
    );
    assert.equal(created.status, 201);
    assert.equal(created.body.company.symbol, 'DCCR');
    assert.equal(created.body.company.isPublic, false);
    assert.equal(created.body.company.sharePrice, 50);
    assert.equal(created.body.balance, 5000);

    const companyId = created.body.company.id as string;
    const published = await request(baseUrl, 'POST', `/api/companies/${companyId}/publish`, undefined, tokenA);
    assert.equal(published.status, 200);
    assert.equal(published.body.openedShares, 49);
    assert.equal(published.body.company.availableShares, 49);

    const bought = await request(baseUrl, 'POST', `/api/companies/${companyId}/buy`, { shares: 5 }, tokenB);
    assert.equal(bought.status, 200);
    assert.equal(bought.body.totalPrice, 250);
    assert.equal(bought.body.balance, 9750);
    assert.equal(bought.body.company.availableShares, 44);

    const donated = await request(baseUrl, 'POST', `/api/companies/${companyId}/donate`, { amount: 1000 }, tokenB);
    assert.equal(donated.status, 200);
    assert.equal(donated.body.company.marketCap, 6000);
    assert.equal(donated.body.company.sharePrice, 60);

    const sold = await request(baseUrl, 'POST', `/api/companies/${companyId}/sell`, { shares: 1 }, tokenA);
    assert.equal(sold.status, 200);
    assert.equal(sold.body.totalPrice, 60);
    assert.equal(sold.body.company.availableShares, 45);

    const portfolioB = await request(baseUrl, 'GET', '/api/portfolio', undefined, tokenB);
    assert.equal(portfolioB.status, 200);
    assert.equal(portfolioB.body.holdings[0].shares, 5);
    assert.equal(portfolioB.body.holdings[0].value, 300);
    assert.equal(portfolioB.body.netWorth, 9050);

    const userRankings = await request(baseUrl, 'GET', '/api/rankings/users');
    assert.equal(userRankings.status, 200);
    assert.deepEqual(
      userRankings.body.data.map((user: Json) => user.username),
      ['benja', 'ana']
    );

    const companyRankings = await request(baseUrl, 'GET', '/api/rankings/companies');
    assert.equal(companyRankings.status, 200);
    assert.equal(companyRankings.body.data[0].symbol, 'ASL');

    const unauthorized = await request(baseUrl, 'POST', `/api/companies/${companyId}/buy`, { shares: 1 });
    assert.equal(unauthorized.status, 401);
  } finally {
    server.close();
  }
}

main().then(() => {
  console.log('api self-check ok');
});
