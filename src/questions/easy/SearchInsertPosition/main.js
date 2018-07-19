import attempt from './attempt';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'SearchInsertPosition';
const nums = [1, 3, 5, 6];
const target = 2;

function logQuestionDetails() {
    log('Given a sorted array and a target value, return the index if the target is found. '
    + 'If not, return the index where it would be if it were inserted in order.');
    log('You may assume no duplicates in the array.');
    log('Example:\n'
        + '\tInput: [1,3,5,6], 5'
        + '\tOutput: 2');
    logUserInput({ nums, target });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [nums, target], [nums, target]);
}

export function run() {
    logQuestionDetails();
    const attemptedAnswer = timeFunction('Attempt', attempt, [nums, target]);

    return {
        passed: attemptedAnswer === 1,
        answer: 1,
        attempt: attemptedAnswer,
    };
}
