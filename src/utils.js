export function log(string) {
    console.log(string);
}

export function timeFunction(label, callback, arrayOfArguments) {
    console.time(`${label} took`);
    const result = callback.apply(null, arrayOfArguments);
    console.timeEnd(`${label} took`);
    return result;
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

export function logUserInput(inputObject) {
    log('User input for question:');
    for (let index = 0; index < Object.keys(inputObject).length; index++) {
        const key = Object.keys(inputObject)[index];
        log(`${key}: ${inputObject[key]}`);
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

export function verifyInputConformance(questionName, inputs, expectations) {
    for (let index = 0; index < inputs.length; index++) {
        if (typeof inputs[index] === 'undefined') {
            throw new Error(expectedInputErrorMessage(questionName, expectations));
        }
    }
}
