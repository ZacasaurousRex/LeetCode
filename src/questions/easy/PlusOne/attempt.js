function carryTheOne(array, index) {
    const tempArray = array;
    if (tempArray[index] > 9) {
        tempArray[index] = 0;
        const nextIndex = index - 1;
        if (nextIndex >= 0) {
            tempArray[nextIndex] += 1;
            return carryTheOne(tempArray, nextIndex);
        }
        tempArray.splice(0, 0, 1);
    }
    return tempArray;
}

export default function plusOne(digits) {
    const returnValue = digits;
    const lastIndex = returnValue.length - 1;
    returnValue[lastIndex] += 1;
    return carryTheOne(returnValue, lastIndex);
}
