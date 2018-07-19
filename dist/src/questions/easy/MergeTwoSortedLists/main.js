'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyQuestionConformance = verifyQuestionConformance;
exports.run = run;

var _answer = require('./answer');

var _answer2 = _interopRequireDefault(_answer);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionName = 'MergeTwoSortedLists';
var firstList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
var secondList = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};
var inputExample = [firstList, secondList];

function logQuestionDetails() {
    (0, _utils.log)('Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.');
    (0, _utils.log)('Example:\n' + '\tInput: 1->2->4, 1->3->4\n' + '\tOutput: 1->1->2->3->4->4');
    var firstListAsString = JSON.stringify(firstList);
    var secondListAsString = JSON.stringify(secondList);
    (0, _utils.logUserInput)({ firstListAsString: firstListAsString, secondListAsString: secondListAsString });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [firstList, secondList], [inputExample]);
}

function run() {
    logQuestionDetails();
    var correctAnswer = (0, _utils.timeFunction)('Answer', _answer2.default, [firstList, secondList]);

    return {
        passed: false,
        answer: JSON.stringify(correctAnswer)
    };
}