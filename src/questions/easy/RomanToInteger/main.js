import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction, expectedInputErrorMessage,
} from '../../../utils';

const questionName = 'RomanToInteger';
const romanNumeralInput = process.argv[3].toUpperCase();
const inputExample = 'IV';

function logQuestionetails(romanNumeral) {
    log('Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.');
    log('Symbol       Value\n'
        + 'I            1\n'
        + 'V            5\n'
        + 'X            10\n'
        + 'L            50\n'
        + 'C            100\n'
        + 'D            500\n'
        + 'M            1000');
    log('For example, two is written as II in Roman numeral, just two one\'s added together. Twelve is written as, XII,'
        + ' which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.');
    log('Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not'
        + ' IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four.'
        + ' The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:');
    log('\tI can be placed before V (5) and X (10) to make 4 and 9. \n'
        + '\tX can be placed before L (50) and C (100) to make 40 and 90. \n'
        + '\tC can be placed before D (500) and M (1000) to make 400 and 900.');
    log('Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.');
    log('Example 1:\n'
        + 'Input: "III"\n'
        + 'Output: 3\n');
    log('Example 2:\n'
        + 'Input: "IV"\n'
        + 'Output: 4\n');
    log('Example 3:\n'
        + 'Input: "IX"\n'
        + 'Output: 9\n');
    log('Example 4:\n'
        + 'Input: "LVIII"\n'
        + 'Output: 58\n'
        + 'Explanation: C = 100, L = 50, XXX = 30 and III = 3.\n');
    log('Example 5:\n'
        + 'Input: "MCMXCIV"\n'
        + 'Output: 1994\n'
        + 'Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.');
    logUserInput({ Input: romanNumeral });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [romanNumeralInput], [inputExample]);
    const validRomanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (let i = 0; i < romanNumeralInput.length; i++) {
        if (validRomanNumerals.indexOf(romanNumeralInput[i]) < 0) {
            const customErrorMessage = `${expectedInputErrorMessage(questionName, [inputExample])}`;
            const alternativeExamples = `\n\tValid roman numeral inputs: ${validRomanNumerals}`;
            throw new Error(customErrorMessage + alternativeExamples);
        }
    }
}

export function run() {
    logQuestionetails(romanNumeralInput);

    const correctAnswer = timeFunction('Answer', answer, [romanNumeralInput]);
    const userPassed = false;

    return {
        passed: userPassed,
        answer: correctAnswer,
    };
}
