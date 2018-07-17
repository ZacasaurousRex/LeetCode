import answer from './answer';
import {
    verifyInputConformance, timeFunction, log, logUserInput,
} from '../../../utils';

const questionName = 'LongestCommonPrefix';
const input = process.argv[3];
const inputExample = ['flower', 'flow', 'flight'];

function logQuestionDetails(userInput) {
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
    logQuestionDetails(input);
    const correctAnswer = timeFunction('Answer', answer, [input]);

    return {
        answer: correctAnswer,
    };
}
