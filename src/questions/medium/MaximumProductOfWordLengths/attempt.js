function arrayOneContainsArrayTwoChar(wordOne, wordTwo) {
    for (let i = 0; i < wordTwo.length; i++) {
        if (wordOne.indexOf(wordTwo[i]) >= 0) {
            return true;
        }
    }
    return false;
}

export default function maxProduct(words) {
    let maxProductValue = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            const firstArrayLarger = words[i].length < words[j].length;
            const firstWord = firstArrayLarger ? words[j] : words[i];
            const secondWord = firstArrayLarger ? words[i] : words[j];
            if (!arrayOneContainsArrayTwoChar(firstWord, secondWord)) {
                const currentProductValue = firstWord.length * secondWord.length;
                maxProductValue = Math.max(currentProductValue, maxProductValue);
            }
        }
    }
    return maxProductValue;
}
