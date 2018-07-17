"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeElement;
function removeElement(nums, val) {
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
}