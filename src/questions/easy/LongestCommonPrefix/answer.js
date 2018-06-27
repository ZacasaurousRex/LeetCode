export default function LongestCommonPrefix(arrayOfStrings) {
    if (typeof arrayOfStrings === 'undefined' || typeof arrayOfStrings.length === 'undefined' || typeof arrayOfStrings[0] === 'undefined') {
        return '';
    }
    let prefix = arrayOfStrings[0];
    for (let stringIndex = 0; stringIndex < arrayOfStrings.length; stringIndex++) {
        while (arrayOfStrings[stringIndex].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                return prefix;
            }
        }
    }
    return prefix;
}
