const { expect } = require('@jest/globals');
const validateIdLength = require('../src/validateIdNumberLength');
const validateIdNumberDigit = require('../src/validateIdNumberDigit')

describe('Validate ID Number', () => {
    const idNumber = '9004295355088';

    // Test the if the ID number has 13 digits
    test('ID Number should be 13 digits', () => {
        expect(validateIdLength(idNumber)).toBeTruthy();
    });

    // Test the if the ID number has digits only
    test('ID Number should contain only digits', () => {
        expect(validateIdNumberDigit(idNumber)).toBeTruthy();
    });

});

