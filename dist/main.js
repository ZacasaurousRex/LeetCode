'use strict';

var _find = require('find');

var _find2 = _interopRequireDefault(_find);

var _utils = require('./src/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileToFind = process.argv[2];
var uiBreak = '====================================';
var questionExecuteFileName = 'main.js';

function questionMainFileExists(currentFile) {
    var lowerCaseFile = currentFile.toLowerCase();
    var questionFolderExists = lowerCaseFile.includes('' + fileToFind.toLowerCase());
    var questionExecutabelExists = lowerCaseFile.includes(questionExecuteFileName);
    return questionFolderExists && questionExecutabelExists;
}

function runFile(files) {
    (0, _utils.log)('\n' + uiBreak);
    for (var index = 0; index < files.length; index++) {
        var currentFile = files[index];
        if (questionMainFileExists(currentFile.toLowerCase())) {
            var moduleRequirePath = (0, _utils.convertWindowsPathToUnix)(currentFile);
            moduleRequirePath = moduleRequirePath.replace('.js', '');

            (0, _utils.log)('Preparing to run ' + moduleRequirePath);
            /* eslint-disable */
            var fileToRun = require('./' + moduleRequirePath);
            /* eslint-enable */
            try {
                fileToRun.verifyQuestionConformance();
            } catch (e) {
                (0, _utils.log)(e.message);
                (0, _utils.log)('Exiting...');
                (0, _utils.log)(uiBreak);
                process.exit();
            }
            var result = fileToRun.run();
            if (result.passed === false) {
                (0, _utils.log)('Sorry, but you\'re attempt did not pass. Please try again.\n');
                if (typeof result.attempt !== 'undefined') {
                    (0, _utils.log)('Your answer was:');
                    (0, _utils.log)(result.attempt);
                }
                if (typeof result.answer !== 'undefined') {
                    (0, _utils.log)('The correct answer was:\n' + result.answer);
                }
            } else if (result.passed === true) {
                (0, _utils.log)('Question passed. Your answer was:');
                (0, _utils.log)(result.attempt);
            }
            break;
        }
    }
    (0, _utils.log)(uiBreak + '\n');
}

if (typeof fileToFind !== 'undefined') {
    _find2.default.file('src/questions', runFile).error(function (err) {
        if (err) {
            (0, _utils.log)('There was an error finding the file:');
            (0, _utils.log)(err);
        }
    });
} else {
    (0, _utils.log)('\nThere was no input file.');
}