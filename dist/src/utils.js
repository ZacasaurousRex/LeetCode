'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.hasOwnProperty = hasOwnProperty;
exports.arraysEqual = arraysEqual;
exports.convertWindowsPathToUnix = convertWindowsPathToUnix;
exports.expectedInputErrorMessage = expectedInputErrorMessage;
exports.verifyInputConformance = verifyInputConformance;
function log(string) {
    console.log(string);
}

function hasOwnProperty(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

function arraysEqual(array, array2) {
    if (array.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

function convertWindowsPathToUnix(fileToRunDirectory) {
    var isWin = process.platform === 'win32';
    var unixPathToRun = fileToRunDirectory;
    if (isWin) {
        var fileToRunPathAsArray = fileToRunDirectory.split('\\');
        unixPathToRun = '';
        for (var index = 0; index < fileToRunPathAsArray.length; index++) {
            var joiner = index < fileToRunPathAsArray.length - 1 ? '/' : '';
            unixPathToRun += fileToRunPathAsArray[index] + joiner;
        }
    }
    return unixPathToRun;
}

function expectedInputErrorMessage(questionName, arrayOfExpectedInput) {
    var givenArguments = process.argv;
    givenArguments = process.argv.splice(2, process.argv.length - 1);
    var errorMessage = 'This test was running with the command:\n';
    errorMessage += '\tnpm run start ' + givenArguments.join(' ') + '\n';
    errorMessage += 'The test was expecting the command to look like:\n';
    errorMessage += '\tnpm run start ' + questionName + ' ' + arrayOfExpectedInput.join(' ') + '\n';
    // throw new Error(errorMessage);
    return errorMessage;
}

function verifyInputConformance(questionName, inputs, expectations) {
    for (var index = 0; index < inputs.length; index++) {
        if (typeof inputs[index] === 'undefined') {
            throw new Error(expectedInputErrorMessage(questionName, expectations));
        }
    }
}