import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'LongestCommonPrefix';
const input = process.argv[3];
const inputExample = ['flower', 'flow', 'flight'];

function logQuestionetails(userInput) {
    log('Write a function to find the longest common prefix string amongst an array of strings.'
        + 'If there is no common prefix, return an empty string "".');
    log('Example 1:'
        + 'Input: ["flower","flow","flight"]'
        + 'Output: "fl"');
    logUserInput({ Input: userInput });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [input], [inputExample]);
}

export function run() {
    logQuestionetails(input);
    const correctAnswer = timeFunction('Answer', answer, [input]);

    return {
        answer: correctAnswer,
    };
}
