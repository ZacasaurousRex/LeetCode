'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.logUserInput = logUserInput;
exports.expectedInputErrorMessage = expectedInputErrorMessage;
function log(string) {
    console.log(string); // eslint-disable-line no-console
}

function logUserInput(inputObject) {
    log('User input for question:');
    for (var index = 0; index < Object.keys(inputObject).length; index++) {
        var key = Object.keys(inputObject)[index];
        log('\t' + key + ': ' + inputObject[key]);
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