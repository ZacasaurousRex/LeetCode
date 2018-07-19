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

var questionName = 'RemoveDuplicatesFromSortedArray';
var inputExample = [1, 1, 2];

function logQuestionDetails() {
    (0, _utils.log)('Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.' + 'Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.');
    (0, _utils.log)('Example:\n' + '\tGiven nums = [1,1,2], Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.' + 'It doesn\'t matter what you leave beyond the returned length.');
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