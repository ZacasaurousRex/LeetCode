"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reverse;
function reverse(integerInput) {
    var sign = integerInput > 0 ? 1 : -1;
    var thirtyTwoBitSignedInt = Math.pow(2, 31) - 1; // eslint-disable-line
    var inputReversed = 0;
    var tempInput = sign * integerInput;

    while (tempInput > 0) {
        var digit = tempInput % 10;
        tempInput = Math.floor(tempInput / 10);
        inputReversed = inputReversed * 10 + digit;
    }

    if (inputReversed > thirtyTwoBitSignedInt) {
        return 0;
    }
    return sign * inputReversed;
}