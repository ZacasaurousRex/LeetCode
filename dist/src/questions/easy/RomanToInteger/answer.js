'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = romanToInteger;

var _utils = require('../../../utils');

var romanNumberValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function isASpecialCase(currentRomanNumeral, nextRomanNumeral) {
    var specialCases = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    var comparison = currentRomanNumeral + nextRomanNumeral;
    return specialCases.indexOf(comparison) >= 0;
}

function handleSpecialCase(romanNumeral, index) {
    var nextIndex = index + 1;
    var currentRomanNumeral = romanNumeral[index];
    var nextRomanNumeral = romanNumeral[nextIndex];
    var currentNumberValue = romanNumberValues[currentRomanNumeral];
    var nextNumberValue = romanNumberValues[nextRomanNumeral];
    var containsSpecialCase = isASpecialCase(currentRomanNumeral, nextRomanNumeral);
    var numberValue = currentNumberValue;
    if (containsSpecialCase) {
        numberValue = nextNumberValue - currentNumberValue;
    }
    return { skipNex: containsSpecialCase, value: numberValue };
}

function romanToInteger(romanNumeral) {
    var translatedNumberValue = 0;
    for (var index = 0; index < romanNumeral.length; index++) {
        if ((0, _utils.hasOwnProperty)(romanNumberValues, romanNumeral[index])) {
            var specialCase = handleSpecialCase(romanNumeral, index);
            translatedNumberValue += specialCase.value;
            if (specialCase.skipNex) {
                index += 1;
            }
        }
    }
    return translatedNumberValue;
}