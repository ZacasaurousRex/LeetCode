import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'RemoveElement';
const inputExample = [[3, 2, 2, 3], 3];

function logQuestionDetails() {
    log('Given an array nums and a value val, remove all instances of that value in-place and return the new length.'
        + 'Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.'
        + 'The order of elements can be changed. It doesn\'t matter what you leave beyond the new length.');
    log('Example:\n'
        + '\tGiven nums = [3,2,2,3], val = 3,\n'
        + '\tYour function should return length = 2, with the first two elements of nums being 2.\n'
        + '\tIt doesn\'t matter what you leave beyond the returned length.');
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
