import assert from 'node:assert/strict';
import { rankUsersByNetWorth, sharePrice } from '../src/controllers/rankingController';
import { buildSeedCompanies } from '../src/seeders/seedCompanies';

const seededCompanies = buildSeedCompanies();
const seededSymbols = new Set(seededCompanies.map((company) => company.symbol));

assert.equal(seededCompanies.length, 503);
assert.equal(seededSymbols.size, seededCompanies.length);
assert.ok(seededSymbols.has('AAPL'));
assert.ok(seededSymbols.has('BRK.B'));
assert.ok(seededSymbols.has('BF.B'));
assert.ok(seededCompanies.every((company) => company.marketCap > 0 && company.marketCap < 2147483647));
assert.ok(seededCompanies.every((company) => company.totalShares > 0));

const ranked = rankUsersByNetWorth([
  {
    id: 'user-a',
    username: 'ana',
    balance: 1000,
    holdings: [{ shares: 3, company: { marketCap: 1001, totalShares: 10 } }],
  },
  {
    id: 'user-b',
    username: 'benja',
    balance: 2000,
    holdings: [{ shares: 1, company: { marketCap: 999, totalShares: 10 } }],
  },
]);

assert.equal(sharePrice({ marketCap: 1001, totalShares: 10 }), 100);
assert.deepEqual(
  ranked.map(({ username, portfolioValue, netWorth }) => ({ username, portfolioValue, netWorth })),
  [
    { username: 'ana', portfolioValue: 300, netWorth: 1300 },
    { username: 'benja', portfolioValue: 99, netWorth: 2099 },
  ].sort((a, b) => b.netWorth - a.netWorth)
);
assert.equal('password' in ranked[0], false);

console.log('ranking self-check ok');
