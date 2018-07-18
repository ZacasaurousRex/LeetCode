import answer from './answer';
import {
    log, verifyInputConformance, logUserInput, timeFunction,
} from '../../../utils';

const questionName = 'MaximumBinaryTree';
const inputExample = [3, 2, 1, 6, 0, 5];

function logQuestionDetails() {
    log('Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:');
    log('\t1. The root is the maximum number in the array.');
    log('\t2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.');
    log('\t3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.');
    log('Construct the maximum tree by the given array and output the root node of this tree.');
    log('Example:\n'
        + '\tInput: [3,2,1,6,0,5]'
        + '\tOutput: return the tree root node representing the following tree:');
    log('   6\n'
      + ' /   \\\n'
      + '3     5\n'
      + '\\    /\n'
      + ' 2  0\n'
      + '   \\\n'
      + '     1\n');
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
        answer: JSON.stringify(correctAnswer),
    };
}
