import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'ValidParentheses';
const input = process.argv[3];
const inputExample = '()[]{}';

function logQuestionDetails(userInput) {
    log('Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.');
    log('An input string is valid if:'
        + '\tOpen brackets must be closed by the same type of brackets.'
        + '\tOpen brackets must be closed in the correct order.'
        + 'An empty string is also considered valid.');
    log('Example 1:'
        + '\tInput: "()"'
        + '\tOutput: true');
    log('Example 2:'
        + '\tInput: "()[]{}"'
        + '\tOutput: true');
    log('Example 3:'
        + '\tInput: "(]"'
        + '\tOutput: false');
    logUserInput({ Input: userInput });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [input], [inputExample]);
}

export function run() {
    logQuestionDetails(input);
    const correctAnswer = timeFunction('Answer', answer, [input]);

    return {
        passed: false,
        answer: correctAnswer,
    };
}
