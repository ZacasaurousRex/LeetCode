export default function palindromeNumber(integerInput) {
    if (integerInput > 0 && integerInput % 10 === 0) {
        return false;
    }
    if (integerInput < 0) {
        return false;
    }

    let reversed = 0;
    let tempIntegerInput = integerInput;

    while (tempIntegerInput > 0) {
        const digit = tempIntegerInput % 10;
        reversed = reversed * 10 + digit;
        tempIntegerInput = Math.floor(tempIntegerInput / 10);
    }
    return reversed === integerInput;
}
