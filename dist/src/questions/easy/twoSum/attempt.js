"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = twoSum;
function wait(ms) {
    var start = Date.now();
    var now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

function twoSum(nums, target) {
    wait(1000);
    return [nums, target];
}