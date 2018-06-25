'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = twoSum;

var _utils = require('../../../utils');

function twoSum(nums, target) {
    var indexNumsMap = {};
    if (nums.length < 2) {
        return new Error('There are not enough numbers.');
    }

    for (var index = 0; index < nums.length; index++) {
        var compliment = target - nums[index];
        if (!(0, _utils.hasOwnProperty)(indexNumsMap, compliment)) {
            indexNumsMap[nums[index]] = index;
        } else {
            return [indexNumsMap[compliment], index];
        }
    }
    return new Error('This array is using the same element twice to get the solution');
}