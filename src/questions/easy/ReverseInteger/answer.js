export default function reverse(integerInput) {
    const sign = integerInput > 0 ? 1 : -1;
    const thirtyTwoBitSignedInt = Math.pow(2, 31) - 1;// eslint-disable-line
    let inputReversed = 0;
    let tempInput = sign * integerInput;

    while (tempInput > 0) {
        const digit = tempInput % 10;
        tempInput = Math.floor(tempInput / 10);
        inputReversed = (inputReversed * 10) + digit;
    }

    if (inputReversed > thirtyTwoBitSignedInt) {
        return 0;
    }
    return sign * inputReversed;
}
