'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyQuestionConformance = verifyQuestionConformance;
exports.run = run;

var _answer = require('./answer');

var _answer2 = _interopRequireDefault(_answer);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionName = 'RomanToInteger';
var romanNumeralInput = process.argv[3].toUpperCase();
var inputExample = 'IV';

function logQuestionDetails(romanNumeral) {
    (0, _utils.log)('Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.');
    (0, _utils.log)('Symbol       Value\n' + 'I            1\n' + 'V            5\n' + 'X            10\n' + 'L            50\n' + 'C            100\n' + 'D            500\n' + 'M            1000');
    (0, _utils.log)('For example, two is written as II in Roman numeral, just two one\'s added together. Twelve is written as, XII,' + ' which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.');
    (0, _utils.log)('Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not' + ' IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four.' + ' The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:');
    (0, _utils.log)('\tI can be placed before V (5) and X (10) to make 4 and 9. \n' + '\tX can be placed before L (50) and C (100) to make 40 and 90. \n' + '\tC can be placed before D (500) and M (1000) to make 400 and 900.');
    (0, _utils.log)('Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.');
    (0, _utils.log)('Example 1:\n' + 'Input: "III"\n' + 'Output: 3\n');
    (0, _utils.log)('Example 2:\n' + 'Input: "IV"\n' + 'Output: 4\n');
    (0, _utils.log)('Example 3:\n' + 'Input: "IX"\n' + 'Output: 9\n');
    (0, _utils.log)('Example 4:\n' + 'Input: "LVIII"\n' + 'Output: 58\n' + 'Explanation: C = 100, L = 50, XXX = 30 and III = 3.\n');
    (0, _utils.log)('Example 5:\n' + 'Input: "MCMXCIV"\n' + 'Output: 1994\n' + 'Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.');
    (0, _utils.logUserInput)({ Input: romanNumeral });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [romanNumeralInput], [inputExample]);
    var validRomanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (var i = 0; i < romanNumeralInput.length; i++) {
        if (validRomanNumerals.indexOf(romanNumeralInput[i]) < 0) {
            var customErrorMessage = '' + (0, _utils.expectedInputErrorMessage)(questionName, [inputExample]);
            var alternativeExamples = '\n\tValid roman numeral inputs: ' + validRomanNumerals;
            throw new Error(customErrorMessage + alternativeExamples);
        }
    }
}

function run() {
    logQuestionDetails(romanNumeralInput);

    var correctAnswer = (0, _utils.timeFunction)('Answer', _answer2.default, [romanNumeralInput]);
    var userPassed = false;

    return {
        passed: userPassed,
        answer: correctAnswer
    };
}