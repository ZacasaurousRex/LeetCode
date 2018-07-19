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

var questionName = 'SearchInsertPosition';
var nums = [1, 3, 5, 6];
var target = 2;

function logQuestionDetails() {
    (0, _utils.log)('Given a sorted array and a target value, return the index if the target is found. ' + 'If not, return the index where it would be if it were inserted in order.');
    (0, _utils.log)('You may assume no duplicates in the array.');
    (0, _utils.log)('Example:\n' + '\tInput: [1,3,5,6], 5' + '\tOutput: 2');
    (0, _utils.logUserInput)({ nums: nums, target: target });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [nums, target], [nums, target]);
}

function run() {
    logQuestionDetails();
    var attemptedAnswer = (0, _utils.timeFunction)('Attempt', _attempt2.default, [nums, target]);

    return {
        passed: attemptedAnswer === 1,
        answer: 1,
        attempt: attemptedAnswer
    };
}