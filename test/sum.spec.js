const sum = require('../src/sum');
const assert = require('assert');

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        assert.equal(sum(1, 2), 3);
    });
});

describe('flaky', function () {
    it('flaky failure test with retries enabled', function () {
        const random = Math.random() * 100;
        const passes = random > 70;
        assert(passes);
    });
});
