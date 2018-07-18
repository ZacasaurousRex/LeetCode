import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'RemoveDuplicatesFromSortedArray';
const inputExample = [1, 1, 2];

function logQuestionDetails() {
    log('Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.'
        + 'Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.');
    log('Example:\n'
        + '\tGiven nums = [1,1,2], Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.'
        + 'It doesn\'t matter what you leave beyond the returned length.');
    logUserInput({ inputExample });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [inputExample], [inputExample]);
}

export function run() {
    logQuestionDetails();
    const correctAnswer = timeFunction('Answer', answer, [inputExample]);

    return {
        passed: false,
        answer: correctAnswer,
    };
}
