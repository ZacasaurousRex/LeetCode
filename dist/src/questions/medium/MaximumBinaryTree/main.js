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
var inputExample = [3, 2, 1, 6, 0, 5];

function logQuestionDetails() {
    (0, _utils.log)('Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:');
    (0, _utils.log)('\t1. The root is the maximum number in the array.');
    (0, _utils.log)('\t2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.');
    (0, _utils.log)('\t3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.');
    (0, _utils.log)('Construct the maximum tree by the given array and output the root node of this tree.');
    (0, _utils.log)('Example:\n' + '\tInput: [3,2,1,6,0,5]' + '\tOutput: return the tree root node representing the following tree:');
    (0, _utils.log)('   6\n' + ' /   \\\n' + '3     5\n' + '\\    /\n' + ' 2  0\n' + '   \\\n' + '     1\n');
    (0, _utils.logUserInput)({ inputExample: inputExample });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [inputExample], [inputExample]);
}

function run() {
    logQuestionDetails();
    var correctAnswer = (0, _utils.timeFunction)('Answer', _answer2.default, [inputExample]);

    return {
        passed: false,
        answer: JSON.stringify(correctAnswer)
    };
}