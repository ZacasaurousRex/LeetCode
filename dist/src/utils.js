'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.timeFunction = timeFunction;
exports.hasOwnProperty = hasOwnProperty;
exports.arraysEqual = arraysEqual;
exports.convertWindowsPathToUnix = convertWindowsPathToUnix;
exports.logUserInput = logUserInput;
exports.expectedInputErrorMessage = expectedInputErrorMessage;
exports.verifyInputConformance = verifyInputConformance;
function log(string) {
    console.log(string);
}

function timeFunction(label, callback, arrayOfArguments) {
    console.time(label + ' took');
    var result = callback.apply(null, arrayOfArguments);
    console.timeEnd(label + ' took');
    return result;
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

function logUserInput(inputObject) {
    log('User input for question:');
    for (var index = 0; index < Object.keys(inputObject).length; index++) {
        var key = Object.keys(inputObject)[index];
        log(key + ': ' + inputObject[key]);
    }
}

function expectedInputErrorMessage(questionName, arrayOfExpectedInput) {
    var givenArguments = process.argv.splice(2, process.argv.length - 1);
    var errorMessage = 'This test was running with the command:\n';
    errorMessage += '\tnpm run start ' + givenArguments.join(' ') + '\n';
    errorMessage += 'The test was expecting the command to look like:\n';
    errorMessage += '\tnpm run start ' + questionName + ' ' + arrayOfExpectedInput.join(' ') + '\n';
    return errorMessage;
}

function verifyInputConformance(questionName, inputs, expectations) {
    for (var index = 0; index < inputs.length; index++) {
        if (typeof inputs[index] === 'undefined') {
            throw new Error(expectedInputErrorMessage(questionName, expectations));
        }
    }
}