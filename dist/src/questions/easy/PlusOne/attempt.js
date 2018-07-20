"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = plusOne;
function carryTheOne(array, index) {
    var tempArray = array;
    if (tempArray[index] > 9) {
        tempArray[index] = 0;
        var nextIndex = index - 1;
        if (nextIndex >= 0) {
            tempArray[nextIndex] += 1;
            return carryTheOne(tempArray, nextIndex);
        }
        tempArray.splice(0, 0, 1);
    }
    return tempArray;
}

function plusOne(digits) {
    var returnValue = digits;
    var lastIndex = returnValue.length - 1;
    returnValue[lastIndex] += 1;
    return carryTheOne(returnValue, lastIndex);
}