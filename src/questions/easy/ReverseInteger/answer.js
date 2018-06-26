export default function reverse(integerInput) {
    let inputReversed = 0;
    const sign = integerInput > 0 ? 1 : -1;
    let tempInput = sign * integerInput;

    while (tempInput > 0) {
        const digit = tempInput % 10;
        tempInput = Math.floor(tempInput / 10);
        inputReversed = (inputReversed * 10) + digit;
    }

    if (inputReversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return sign * inputReversed;
}
