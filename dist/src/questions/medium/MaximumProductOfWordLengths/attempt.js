"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maxProduct;
function arrayOneContainsArrayTwoChar(wordOne, wordTwo) {
    for (var i = 0; i < wordTwo.length; i++) {
        if (wordOne.indexOf(wordTwo[i]) >= 0) {
            return true;
        }
    }
    return false;
}

function maxProduct(words) {
    var maxProductValue = 0;
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words.length; j++) {
            var firstArrayLarger = words[i].length < words[j].length;
            var firstWord = firstArrayLarger ? words[j] : words[i];
            var secondWord = firstArrayLarger ? words[i] : words[j];
            if (!arrayOneContainsArrayTwoChar(firstWord, secondWord)) {
                var currentProductValue = firstWord.length * secondWord.length;
                maxProductValue = Math.max(currentProductValue, maxProductValue);
            }
        }
    }
    return maxProductValue;
}