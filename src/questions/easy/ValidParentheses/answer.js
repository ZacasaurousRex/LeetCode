export default function isValid(stringInput) {
    const acceptableInput = [{ l: '(', r: ')' }, { l: '{', r: '}' }, { l: '[', r: ']' }];
    let leftStack = '';
    let rightQueue = '';
    for (let stringIndex = 0; stringIndex < stringInput.length; stringIndex++) {
        const currentChar = stringInput[stringIndex];
        for (let i = 0; i < acceptableInput.length; i++) {
            if (currentChar === acceptableInput[i].l) {
                leftStack += currentChar;
                rightQueue = acceptableInput[i].r + rightQueue;
            } else if (currentChar === acceptableInput[i].r) {
                if (leftStack.length === 0
                    || leftStack[leftStack.length - 1] !== acceptableInput[i].l) {
                    return false;
                }
                if (leftStack[leftStack.length - 1] === acceptableInput[i].l
                    && rightQueue[0] === acceptableInput[i].r) {
                    leftStack = leftStack.slice(0, -1);
                    const rightStackLength = rightQueue.length;
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
