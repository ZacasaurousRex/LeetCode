export default function removeDuplicates(arrayOfIntegers) {
    if (arrayOfIntegers.length === 0) return arrayOfIntegers.length;
    for (let i = arrayOfIntegers.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (arrayOfIntegers[i] === arrayOfIntegers[j]) {
                arrayOfIntegers.splice(i, i - j);
            } else {
                j = 0;
            }
        }
    }
    return arrayOfIntegers.length;
}
