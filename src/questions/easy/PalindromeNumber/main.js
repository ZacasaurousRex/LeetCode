import answer from './answer';
import attempt from './attempt';
import {
    log, verifyInputConformance, expectedInputErrorMessage, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'PalindromeNumber';
const input = process.argv[3];
const inputExample = 123;

function logQuestionDetails(integerInput) {
    log('Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.');
    log('Example 1:\n'
        + '\tInput: 121\n'
        + '\tOutput: true');
    log('Example 2:\n'
        + '\tInput: -121\n'
        + '\tOutput: false\n'
        + '\tExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.');
    log('Example 3:\n'
        + '\tInput: 10\n'
        + '\tOutput: false\n'
        + '\tExplanation: Reads 01 from right to left. Therefore it is not a palindrome.');
    logUserInput({ Input: integerInput });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [input], [inputExample]);
    try {
        parseInt(input);
    } catch (e) {
        throw new Error(expectedInputErrorMessage(questionName, [inputExample]));
    }
}

export function run() {
    const integerInput = parseInt(input);
    logQuestionDetails(integerInput);

    const attemptAnswer = timeFunction('Attempt', attempt, [integerInput]);
    const correctAnswer = timeFunction('Answer', answer, [integerInput]);
    const userPassed = correctAnswer === attemptAnswer;

    return {
        passed: userPassed,
        attempt: attemptAnswer,
        answer: correctAnswer,
    };
}
