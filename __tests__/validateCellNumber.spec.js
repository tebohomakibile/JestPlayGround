const { expect } = require('@jest/globals');
const {validateCellNumberLength, validateCellNumber} = require('../src/validateCellNumberLength');

describe('Validate cell number', () => {
    const cellNum = '0827928817';

    test('Cell phone number should be 10 digits long', () => {
        expect(validateCellNumberLength(cellNum)).toBeTruthy()
    });

    test('Second digit should be 6 or 8 or 7', () => {
        expect(validateCellNumber(cellNum)).toBe('8');
    })
    
})


