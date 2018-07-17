'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyQuestionConformance = verifyQuestionConformance;
exports.run = run;

var _answer = require('./answer');

var _answer2 = _interopRequireDefault(_answer);

var _attempt = require('./attempt');

var _attempt2 = _interopRequireDefault(_attempt);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionName = 'PalindromeNumber';
var input = process.argv[3];
var inputExample = 123;

function logQuestionDetails(integerInput) {
    (0, _utils.log)('Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.');
    (0, _utils.log)('Example 1:\n' + '\tInput: 121\n' + '\tOutput: true');
    (0, _utils.log)('Example 2:\n' + '\tInput: -121\n' + '\tOutput: false\n' + '\tExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.');
    (0, _utils.log)('Example 3:\n' + '\tInput: 10\n' + '\tOutput: false\n' + '\tExplanation: Reads 01 from right to left. Therefore it is not a palindrome.');
    (0, _utils.logUserInput)({ Input: integerInput });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [input], [inputExample]);
    try {
        parseInt(input);
    } catch (e) {
        throw new Error((0, _utils.expectedInputErrorMessage)(questionName, [inputExample]));
    }
}

function run() {
    var integerInput = parseInt(input);
    logQuestionDetails(integerInput);

    var attemptAnswer = (0, _utils.timeFunction)('Attempt', _attempt2.default, [integerInput]);
    var correctAnswer = (0, _utils.timeFunction)('Answer', _answer2.default, [integerInput]);
    var userPassed = correctAnswer === attemptAnswer;

    return {
        passed: userPassed,
        attempt: attemptAnswer,
        answer: correctAnswer
    };
}