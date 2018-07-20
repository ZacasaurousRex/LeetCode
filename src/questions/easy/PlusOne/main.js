import attempt from './attempt';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'MaximumProductOfWordLengths';
const input = [9, 9];
const answer = [1, 0, 0];

function logQuestionDetails() {
    log('Given a non-empty array of digits representing a non-negative integer, plus one to the integer.');
    log('The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.');
    log('You may assume the integer does not contain any leading zero, except the number 0 itself.');
    log('Example:\n'
        + `\tInput: ${input}\n`
        + `\tOutput: ${answer}`);
    logUserInput({ input });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [input], [input]);
}

export function run() {
    logQuestionDetails();
    const attemptedAnswer = timeFunction('Attempt', attempt, [input]);

    return {
        passed: attemptedAnswer.toString() === answer.toString(),
        answer,
        attempt: attemptedAnswer,
    };
}
