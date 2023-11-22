const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('adds two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
        // Add more SUM test cases
    });

    describe('SUBTRACT', () => {
        it('subtracts two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
        // Add more SUBTRACT test cases
    });

    describe('DIVIDE', () => {
        it('divides two rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('returns Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
        // Add more DIVIDE test cases
    });

    // Add tests for invalid type
});

