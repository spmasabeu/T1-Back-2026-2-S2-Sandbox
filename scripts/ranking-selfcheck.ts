import assert from 'node:assert/strict';
import { rankUsersByNetWorth } from '../src/controllers/rankingController';
import { COMPANY_VALUE_MAX, COMPANY_VALUE_MIN } from '../src/models/Company';
import { buildSeedCompanies } from '../src/seeders/seedCompanies';

const seededCompanies = buildSeedCompanies();
const seededSymbols = new Set(seededCompanies.map((company) => company.symbol));

assert.equal(seededCompanies.length, 503);
assert.equal(seededSymbols.size, seededCompanies.length);
assert.ok(seededSymbols.has('AAPL'));
assert.ok(seededSymbols.has('BRK.B'));
assert.ok(seededSymbols.has('BF.B'));
assert.ok(seededCompanies.every((company) => company.marketCap >= COMPANY_VALUE_MIN && company.marketCap <= COMPANY_VALUE_MAX));

const ranked = rankUsersByNetWorth([
  {
    id: 'user-a',
    username: 'ana',
    balance: 1000,
    holdings: [{ company: { marketCap: 3000 } }],
  },
  {
    id: 'user-b',
    username: 'benja',
    balance: 2000,
    holdings: [{ company: { marketCap: 999 } }],
  },
]);

assert.deepEqual(
  ranked.map(({ username, portfolioValue, netWorth }) => ({ username, portfolioValue, netWorth })),
  [
    { username: 'ana', portfolioValue: 3000, netWorth: 4000 },
    { username: 'benja', portfolioValue: 999, netWorth: 2999 },
  ].sort((a, b) => b.netWorth - a.netWorth)
);
assert.equal('password' in ranked[0], false);

console.log('ranking self-check ok');
