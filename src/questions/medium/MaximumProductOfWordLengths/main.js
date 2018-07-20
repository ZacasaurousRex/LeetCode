import attempt from './attempt';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'MaximumProductOfWordLengths';
const input = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
const answer = 16;

function logQuestionDetails() {
    log('Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.'
        + ' You may assume that each word will contain only lower case letters. If no such two words exist, return 0.');
    log('Example:\n'
        + '\tInput: ["abcw","baz","foo","bar","xtfn","abcdef"]\n'
        + '\tOutput: 16');
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
