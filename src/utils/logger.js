export function log(string) {
    console.log(string);// eslint-disable-line no-console
}

export function logUserInput(inputObject) {
    log('User input for question:');
    for (let index = 0; index < Object.keys(inputObject).length; index++) {
        const key = Object.keys(inputObject)[index];
        log(`\t${key}: ${inputObject[key]}`);
    }
}

export function expectedInputErrorMessage(questionName, arrayOfExpectedInput) {
    const givenArguments = process.argv.splice(2, process.argv.length - 1);
    let errorMessage = 'This test was running with the command:\n';
    errorMessage += `\tnpm run start ${givenArguments.join(' ')}\n`;
    errorMessage += 'The test was expecting the command to look like:\n';
    errorMessage += `\tnpm run start ${questionName} ${arrayOfExpectedInput.join(' ')}\n`;
    return errorMessage;
}
