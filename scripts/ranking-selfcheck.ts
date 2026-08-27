import assert from 'node:assert/strict';
import { rankUsersByNetWorth, sharePrice } from '../src/controllers/rankingController';

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
