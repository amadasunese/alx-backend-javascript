const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('sums two rounded numbers - case 1', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('sums two rounded numbers - case 2', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('sums two rounded numbers - case 3', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('sums two rounded numbers - case 4', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    // Add more tests for edge cases and other scenarios
});

