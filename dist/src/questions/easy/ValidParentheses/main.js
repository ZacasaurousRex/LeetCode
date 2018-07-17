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
var inputExample = '()[]{}';

function logQuestionDetails(userInput) {
    (0, _utils.log)('Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.');
    (0, _utils.log)('An input string is valid if:' + '\tOpen brackets must be closed by the same type of brackets.' + '\tOpen brackets must be closed in the correct order.' + 'An empty string is also considered valid.');
    (0, _utils.log)('Example 1:' + '\tInput: "()"' + '\tOutput: true');
    (0, _utils.log)('Example 2:' + '\tInput: "()[]{}"' + '\tOutput: true');
    (0, _utils.log)('Example 3:' + '\tInput: "(]"' + '\tOutput: false');
    (0, _utils.logUserInput)({ Input: userInput });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [input], [inputExample]);
}

function run() {
    logQuestionDetails(input);
    var correctAnswer = (0, _utils.timeFunction)('Answer', _answer2.default, [input]);

    return {
        passed: false,
        answer: correctAnswer
    };
}