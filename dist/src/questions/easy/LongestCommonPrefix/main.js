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

var questionName = 'LongestCommonPrefix';
var input = process.argv[3];
var inputExample = ['flower', 'flow', 'flight'];

function logQuestionDetails(userInput) {
    (0, _utils.log)('Write a function to find the longest common prefix string amongst an array of strings.' + 'If there is no common prefix, return an empty string "".');
    (0, _utils.log)('Example 1:' + 'Input: ["flower","flow","flight"]' + 'Output: "fl"');
    (0, _utils.logUserInput)({ Input: userInput });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [input], [inputExample]);
}

function run() {
    logQuestionDetails(input);
    var correctAnswer = (0, _utils.timeFunction)('Answer', _answer2.default, [input]);

    return {
        answer: correctAnswer
    };
}