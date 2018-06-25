import answer from './answer';
import attempt from './attempt';
import {
    log, verifyInputConformance, expectedInputErrorMessage, arraysEqual, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'TwoSum';
const numsInputExample = [2, 7, 11, 15];
const inputArray = process.argv[3];
const inputTarget = process.argv[4];

function logQuestionDetails(nums, target) {
    log('Given an array of integers, return indices of the two numbers such that'
    + 'they add up to a specific target. You may assume that each input would '
    + 'have exactly one solution, and you may not use the same element twice.');
    log('\nExample: Given nums = [2, 7, 11, 15], target = 9, because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].');
    logUserInput({ nums, target });
}

export function verifyQuestionConformance() {
    const expectations = [`[${numsInputExample}]`, '9'];
    verifyInputConformance(questionName, [inputArray, inputTarget], expectations);
    try {
        JSON.parse(inputArray);
    } catch (e) {
        throw new Error(expectedInputErrorMessage(questionName, expectations));
    }
    try {
        parseInt(inputTarget);
    } catch (e) {
        throw new Error(expectedInputErrorMessage(questionName, expectations));
    }
}

export function run() {
    const nums = JSON.parse(inputArray);
    const target = parseInt(inputTarget);
    logQuestionDetails(nums, target);

    const attemptAnswer = timeFunction('Attempt', attempt, [nums, target]);
    const correctAnswer = timeFunction('Answer', answer, [nums, target]);
    const userPassed = arraysEqual(attemptAnswer, correctAnswer);

    return {
        passed: userPassed,
        attempt: `[${attemptAnswer}]`,
        answer: `[${correctAnswer}]`,
    };
}
