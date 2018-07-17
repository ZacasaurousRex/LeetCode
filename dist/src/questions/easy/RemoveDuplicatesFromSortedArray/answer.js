"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeDuplicates;
function removeDuplicates(arrayOfIntegers) {
    if (arrayOfIntegers.length === 0) return arrayOfIntegers.length;
    for (var i = arrayOfIntegers.length - 1; i >= 0; i--) {
        for (var j = i; j >= 0; j--) {
            if (arrayOfIntegers[i] === arrayOfIntegers[j]) {
                arrayOfIntegers.splice(i, i - j);
            } else {
                j = 0;
            }
        }
    }
    return arrayOfIntegers.length;
}