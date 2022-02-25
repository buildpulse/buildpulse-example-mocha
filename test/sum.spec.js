const sum = require('../src/sum');
const assert = require('assert');

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        assert.equal(sum(1, 2), 3);
    });
});
