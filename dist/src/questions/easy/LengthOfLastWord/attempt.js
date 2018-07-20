'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lengthOfLastWord;
// import { log } from '../../../utils';
function getLastValidWord(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i].length > 0) {
            return array[i].length;
        }
    }
    return 0;
}

function lengthOfLastWord(s) {
    var arrayOfWords = s.split(' ');
    if (arrayOfWords.length === 1) {
        return arrayOfWords[0].length;
    }
    return getLastValidWord(arrayOfWords);
}