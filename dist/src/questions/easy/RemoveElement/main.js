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
var inputExample = [[3, 2, 2, 3], 3];

function logQuestionDetails() {
    (0, _utils.log)('Given an array nums and a value val, remove all instances of that value in-place and return the new length.' + 'Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.' + 'The order of elements can be changed. It doesn\'t matter what you leave beyond the new length.');
    (0, _utils.log)('Example:\n' + '\tGiven nums = [3,2,2,3], val = 3,\n' + '\tYour function should return length = 2, with the first two elements of nums being 2.\n' + '\tIt doesn\'t matter what you leave beyond the returned length.');
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
        answer: correctAnswer
    };
}