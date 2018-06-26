import { hasOwnProperty } from '../../../utils';

const romanNumberValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function isASpecialCase(currentRomanNumeral, nextRomanNumeral) {
    const specialCases = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    const comparison = currentRomanNumeral + nextRomanNumeral;
    return specialCases.indexOf(comparison) >= 0;
}

function handleSpecialCase(romanNumeral, index) {
    const nextIndex = index + 1;
    const currentRomanNumeral = romanNumeral[index];
    const nextRomanNumeral = romanNumeral[nextIndex];
    const currentNumberValue = romanNumberValues[currentRomanNumeral];
    const nextNumberValue = romanNumberValues[nextRomanNumeral];
    const containsSpecialCase = isASpecialCase(currentRomanNumeral, nextRomanNumeral);
    let numberValue = currentNumberValue;
    if (containsSpecialCase) {
        numberValue = nextNumberValue - currentNumberValue;
    }
    return { skipNex: containsSpecialCase, value: numberValue };
}

export default function romanToInteger(romanNumeral) {
    let translatedNumberValue = 0;
    for (let index = 0; index < romanNumeral.length; index++) {
        if (hasOwnProperty(romanNumberValues, romanNumeral[index])) {
            const specialCase = handleSpecialCase(romanNumeral, index);
            translatedNumberValue += specialCase.value;
            if (specialCase.skipNex) {
                index += 1;
            }
        }
    }
    return translatedNumberValue;
}
