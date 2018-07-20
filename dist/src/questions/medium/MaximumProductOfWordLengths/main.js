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
var input = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
var answer = 16;

function logQuestionDetails() {
    (0, _utils.log)('Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.' + ' You may assume that each word will contain only lower case letters. If no such two words exist, return 0.');
    (0, _utils.log)('Example:\n' + '\tInput: ["abcw","baz","foo","bar","xtfn","abcdef"]\n' + '\tOutput: 16');
    (0, _utils.logUserInput)({ input: input });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [input], [input]);
}

function run() {
    logQuestionDetails();
    var attemptedAnswer = (0, _utils.timeFunction)('Attempt', _attempt2.default, [input]);

    return {
        passed: attemptedAnswer === answer,
        answer: answer,
        attempt: attemptedAnswer
    };
}