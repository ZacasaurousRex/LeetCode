import expectedInputErrorMessage from './logger';

export function timeFunction(label, callback, arrayOfArguments) {
    console.time(`${label} took`);// eslint-disable-line no-console
    const result = callback(...arrayOfArguments);
    console.timeEnd(`${label} took`);// eslint-disable-line no-console
    return result;
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

export function verifyInputConformance(questionName, inputs, expectations) {
    for (let index = 0; index < inputs.length; index++) {
        if (typeof inputs[index] === 'undefined') {
            throw new Error(expectedInputErrorMessage(questionName, expectations));
        }
    }
}
