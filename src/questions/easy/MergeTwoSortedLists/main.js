import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'LongestCommonPrefix';
const firstList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null,
        },
    },
};
const secondList = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null,
        },
    },
};
const inputExample = [firstList, secondList];

function logQuestionDetails() {
    log('Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.');
    log('Example:\n'
        + '\tInput: 1->2->4, 1->3->4\n'
        + '\tOutput: 1->1->2->3->4->4');
    const firstListAsString = JSON.stringify(firstList);
    const secondListAsString = JSON.stringify(secondList);
    logUserInput({ firstListAsString, secondListAsString });
}

export function verifyQuestionConformance() {
    verifyInputConformance(questionName, [firstList, secondList], [inputExample]);
}

export function run() {
    logQuestionDetails();
    const correctAnswer = timeFunction('Answer', answer, [firstList, secondList]);

    return {
        passed: false,
        answer: JSON.stringify(correctAnswer),
    };
}
