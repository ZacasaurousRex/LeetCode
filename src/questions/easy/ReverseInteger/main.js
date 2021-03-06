import answer from './answer';
import attempt from './attempt';
import {
    log, verifyInputConformance, expectedInputErrorMessage, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'ReverseInteger';
const input = process.argv[3];
const inputExample = 123;

function logQuestionDetails(integerInput) {
    log('Given a 32-bit signed integer, reverse digits of an integer.');
    log('Example 1:\n'
        + '\tInput: 123\n'
        + '\tOutput: 321');
    log('Example 2:\n'
        + '\tInput: -123\n'
        + '\tOutput: -321');
    log('Example 3:\n'
        + '\tInput: 120\n'
        + '\tOutput: 21');
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
