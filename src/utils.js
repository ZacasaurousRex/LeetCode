export function log(string) {
    console.log(string);
}

export function hasOwnProperty(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

export function arraysEqual(array, array2) {
    if (array.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

export function convertWindowsPathToUnix(fileToRunDirectory) {
    const isWin = process.platform === 'win32';
    let unixPathToRun = fileToRunDirectory;
    if (isWin) {
        const fileToRunPathAsArray = fileToRunDirectory.split('\\');
        unixPathToRun = '';
        for (let index = 0; index < fileToRunPathAsArray.length; index++) {
            const joiner = index < fileToRunPathAsArray.length - 1 ? '/' : '';
            unixPathToRun += fileToRunPathAsArray[index] + joiner;
        }
    }
    return unixPathToRun;
}

export function expectedInputErrorMessage(questionName, arrayOfExpectedInput) {
    let givenArguments = process.argv;
    givenArguments = process.argv.splice(2, process.argv.length - 1);
    let errorMessage = 'This test was running with the command:\n';
    errorMessage += `\tnpm run start ${givenArguments.join(' ')}\n`;
    errorMessage += 'The test was expecting the command to look like:\n';
    errorMessage += `\tnpm run start ${questionName} ${arrayOfExpectedInput.join(' ')}\n`;
    // throw new Error(errorMessage);
    return errorMessage;
}

export function verifyInputConformance(questionName, inputs, expectations) {
    for (let index = 0; index < inputs.length; index++) {
        if (typeof inputs[index] === 'undefined') {
            throw new Error(expectedInputErrorMessage(questionName, expectations));
        }
    }
}
