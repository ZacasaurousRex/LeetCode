'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyQuestionConformance = verifyQuestionConformance;
exports.run = run;

var _attempt = require('./attempt');

var _attempt2 = _interopRequireDefault(_attempt);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionName = 'MaximumProductOfWordLengths';
var input = [9, 9];
var answer = [1, 0, 0];

function logQuestionDetails() {
    (0, _utils.log)('Given a non-empty array of digits representing a non-negative integer, plus one to the integer.');
    (0, _utils.log)('The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.');
    (0, _utils.log)('You may assume the integer does not contain any leading zero, except the number 0 itself.');
    (0, _utils.log)('Example:\n' + ('\tInput: ' + input + '\n') + ('\tOutput: ' + answer));
    (0, _utils.logUserInput)({ input: input });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [input], [input]);
}

function run() {
    logQuestionDetails();
    var attemptedAnswer = (0, _utils.timeFunction)('Attempt', _attempt2.default, [input]);

    return {
        passed: attemptedAnswer.toString() === answer.toString(),
        answer: answer,
        attempt: attemptedAnswer
    };
}