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

var questionName = 'ReverseInteger';
var input = process.argv[3];
var inputExample = 123;

function logQuestionDetails(integerInput) {
    (0, _utils.log)('Given a 32-bit signed integer, reverse digits of an integer.');
    (0, _utils.log)('Example 1:\n' + '\tInput: 123\n' + '\tOutput: 321');
    (0, _utils.log)('Example 2:\n' + '\tInput: -123\n' + '\tOutput: -321');
    (0, _utils.log)('Example 3:\n' + '\tInput: 120\n' + '\tOutput: 21');
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