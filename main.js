import find from 'find';
import { log, convertWindowsPathToUnix } from './Questions/utils';

const fileToFind = process.argv[2];
const uiBreak = '====================================';
const questionExecuteFileName = 'main.js';

function questionMainFileExists(currentFile) {
    const lowerCaseFile = currentFile.toLowerCase();
    const questionFolderExists = lowerCaseFile.includes(`${fileToFind.toLowerCase()}`);
    const questionExecutabelExists = lowerCaseFile.includes(questionExecuteFileName);
    return questionFolderExists && questionExecutabelExists;
}

function runFile(files) {
    log(`\n${uiBreak}`);
    for (let index = 0; index < files.length; index++) {
        const currentFile = files[index];
        if (questionMainFileExists(currentFile.toLowerCase())) {
            let moduleRequirePath = convertWindowsPathToUnix(currentFile);
            moduleRequirePath = moduleRequirePath.replace('.js', '');

            log(`Preparing to run ${moduleRequirePath}`);
            /* eslint-disable */
            const fileToRun = require(`./${moduleRequirePath}`);
            /* eslint-enable */
            try {
                fileToRun.verifyQuestionConformance();
            } catch (e) {
                log(e.message);
                log('Exiting...');
                log(uiBreak);
                process.exit();
            }
            const result = fileToRun.run();
            if (result.passed === false) {
                log('Sorry, but you\'re attempt did not pass. Please try again.\n');
                if (typeof result.attempt !== 'undefined') {
                    log('Your answer was:');
                    log(result.attempt);
                }
                if (typeof result.answer !== 'undefined') {
                    log(`The correct answer was:\n${result.answer}`);
                }
            } else if (result.passed === true) {
                log('Question passed. Your answer was:');
                log(result.attempt);
            }
            break;
        }
    }
    log(`${uiBreak}\n`);
}

if (typeof fileToFind !== 'undefined') {
    find.file('Questions', runFile)
        .error((err) => {
            if (err) {
                log('There was an error finding the file:');
            }
        });
} else {
    log('\nThere was no input file.');
}
