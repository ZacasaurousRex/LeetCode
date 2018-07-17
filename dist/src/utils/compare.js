"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasOwnProperty = hasOwnProperty;
exports.arraysEqual = arraysEqual;
function hasOwnProperty(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

function arraysEqual(array, array2) {
    if (array.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}