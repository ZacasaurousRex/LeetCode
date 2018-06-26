"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = palindromeNumber;
function palindromeNumber(integerInput) {
    if (integerInput > 0 && integerInput % 10 === 0) {
        return false;
    }
    if (integerInput < 0) {
        return false;
    }

    var reversed = 0;
    var tempIntegerInput = integerInput;

    while (tempIntegerInput > 0) {
        var digit = tempIntegerInput % 10;
        reversed = reversed * 10 + digit;
        tempIntegerInput = Math.floor(tempIntegerInput / 10);
    }
    return reversed === integerInput;
}