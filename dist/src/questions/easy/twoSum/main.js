'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyQuestionConformance = verifyQuestionConformance;
exports.run = run;

var _answer = require('./answer');

var _answer2 = _interopRequireDefault(_answer);

var _devEnv = require('./devEnv');

var _devEnv2 = _interopRequireDefault(_devEnv);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionName = 'TwoSum';
var numsInputExample = [2, 7, 11, 15];
var inputArray = process.argv[3];
var inputTarget = process.argv[4];

function logQuestionDetails(nums, target) {
    (0, _utils.log)('Given an array of integers, return indices of the two numbers such that' + 'they add up to a specific target. You may assume that each input would ' + 'have exactly one solution, and you may not use the same element twice.');
    (0, _utils.log)('\nExample: Given nums = [2, 7, 11, 15], target = 9, ' + 'Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].');
    (0, _utils.logUserInput)({ nums: nums, target: target });
}

function verifyQuestionConformance() {
    var expectations = ['[' + numsInputExample + ']', '9'];
    (0, _utils.verifyInputConformance)(questionName, [inputArray, inputTarget], expectations);
    try {
        JSON.parse(inputArray);
    } catch (e) {
        throw new Error((0, _utils.expectedInputErrorMessage)(questionName, expectations));
    }
    try {
        parseInt(inputTarget);
    } catch (e) {
        throw new Error((0, _utils.expectedInputErrorMessage)(questionName, expectations));
    }
}

function run() {
    var nums = JSON.parse(inputArray);
    var target = parseInt(inputTarget);
    logQuestionDetails(nums, target);

    var twoSumAttempt = (0, _devEnv2.default)(nums, target);
    var correctAnswer = (0, _answer2.default)(nums, target);
    var userPassed = (0, _utils.arraysEqual)(twoSumAttempt, correctAnswer);

    return {
        passed: userPassed,
        answer: '[' + correctAnswer + ']',
        attempt: '[' + twoSumAttempt + ']'
    };
}