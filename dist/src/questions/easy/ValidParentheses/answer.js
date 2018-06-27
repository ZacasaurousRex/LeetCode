'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isValid;
function isValid(stringInput) {
    var acceptableInput = [{ l: '(', r: ')' }, { l: '{', r: '}' }, { l: '[', r: ']' }];
    var leftStack = '';
    var rightQueue = '';
    for (var stringIndex = 0; stringIndex < stringInput.length; stringIndex++) {
        var currentChar = stringInput[stringIndex];
        for (var i = 0; i < acceptableInput.length; i++) {
            if (currentChar === acceptableInput[i].l) {
                leftStack += currentChar;
                rightQueue = acceptableInput[i].r + rightQueue;
            } else if (currentChar === acceptableInput[i].r) {
                if (leftStack.length === 0 || leftStack[leftStack.length - 1] !== acceptableInput[i].l) {
                    return false;
                }
                if (leftStack[leftStack.length - 1] === acceptableInput[i].l && rightQueue[0] === acceptableInput[i].r) {
                    leftStack = leftStack.slice(0, -1);
                    var rightStackLength = rightQueue.length;
                    rightQueue = rightQueue.substring(1, rightStackLength);
                }
            }
        }
    }
    if (leftStack === '' && rightQueue === '') {
        return true;
    }
    return false;
}