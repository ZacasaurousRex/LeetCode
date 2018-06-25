"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reverse;
function reverse(integerInput) {
    var inputReversed = 0;
    var sign = integerInput > 0 ? 1 : -1;
    var tempInput = sign * integerInput;

    while (tempInput > 0) {
        var digit = tempInput % 10;
        tempInput = Math.floor(tempInput / 10);
        inputReversed = inputReversed * 10 + digit;
    }

    if (inputReversed > 2 ** 31 - 1) {
        return 0;
    }
    return sign * inputReversed;
}