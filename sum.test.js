const test = require('node:test');
const assert = require('node:assert/strict');
const sum = require('./sum');

test('Cong 2 + 3 phai bang 5', () => {
  assert.equal(sum(2, 3), 5);
});

test('Cong -1 + 1 phai bang 0', () => {
  assert.equal(sum(-1, 1), 0);
});
