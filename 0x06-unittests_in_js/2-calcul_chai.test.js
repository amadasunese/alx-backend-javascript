const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('adds two rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
        // Add more SUM test cases
    });

    describe('SUBTRACT', () => {
        it('subtracts two rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
        // Add more SUBTRACT test cases
    });

    describe('DIVIDE', () => {
        it('divides two rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('returns Error when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
        // Add more DIVIDE test cases
    });

    // Add tests for invalid type
});

