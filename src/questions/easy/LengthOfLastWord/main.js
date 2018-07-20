import attempt from './attempt';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'LengthOfLastWord';
const input = 'Hello World';
const answer = 5;

function logQuestionDetails() {
    log('Given a string s consists of upper/lower-case alphabets and empty space characters return the length of last word in the string.');
    log('If the last word does not exist, return 0.');
    log('Example:\n'
        + '\tInput: "Hello World"\n'
        + '\tOutput: 5');
    logUserInput({ input });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [input], [input]);
}

export function run() {
    logQuestionDetails();
    const attemptedAnswer = timeFunction('Attempt', attempt, [input]);

    return {
        passed: attemptedAnswer === answer,
        answer,
        attempt: attemptedAnswer,
    };
}
