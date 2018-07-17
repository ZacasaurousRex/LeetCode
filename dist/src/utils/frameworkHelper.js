'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeFunction = timeFunction;
exports.convertWindowsPathToUnix = convertWindowsPathToUnix;
exports.verifyInputConformance = verifyInputConformance;

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function timeFunction(label, callback, arrayOfArguments) {
    console.time(label + ' took'); // eslint-disable-line no-console
    var result = callback.apply(undefined, _toConsumableArray(arrayOfArguments));
    console.timeEnd(label + ' took'); // eslint-disable-line no-console
    return result;
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

function verifyInputConformance(questionName, inputs, expectations) {
    for (var index = 0; index < inputs.length; index++) {
        if (typeof inputs[index] === 'undefined') {
            throw new Error((0, _logger2.default)(questionName, expectations));
        }
    }
}