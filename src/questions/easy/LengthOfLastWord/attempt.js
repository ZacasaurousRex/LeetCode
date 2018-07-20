// import { log } from '../../../utils';
function getLastValidWord(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].length > 0) {
            return array[i].length;
        }
    }
    return 0;
}

export default function lengthOfLastWord(s) {
    const arrayOfWords = s.split(' ');
    if (arrayOfWords.length === 1) {
        return arrayOfWords[0].length;
    }
    return getLastValidWord(arrayOfWords);
}
