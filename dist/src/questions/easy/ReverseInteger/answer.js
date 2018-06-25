"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reverse;
function reverse(integerInput) {
    var reverse = 0;
    var sign = integerInput > 0 ? 1 : -1;
    integerInput = sign * integerInput;

    while (integerInput > 0) {
        var digit = integerInput % 10;
        integerInput = Math.floor(integerInput / 10);
        reverse = reverse * 10 + digit;
    }

    if (reverse > Math.pow(2, 31) - 1) {
        return 0;
    }
    return sign * reverse;
}