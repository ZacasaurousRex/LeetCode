'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyQuestionConformance = verifyQuestionConformance;
exports.run = run;

var _attempt = require('./attempt');

var _attempt2 = _interopRequireDefault(_attempt);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionName = 'LengthOfLastWord';
var input = 'Hello World';
var answer = 5;

function logQuestionDetails() {
    (0, _utils.log)('Given a string s consists of upper/lower-case alphabets and empty space characters return the length of last word in the string.');
    (0, _utils.log)('If the last word does not exist, return 0.');
    (0, _utils.log)('Example:\n' + '\tInput: "Hello World"\n' + '\tOutput: 5');
    (0, _utils.logUserInput)({ input: input });
}

function verifyQuestionConformance() {
    (0, _utils.verifyInputConformance)(questionName, [input], [input]);
}

function run() {
    logQuestionDetails();
    var attemptedAnswer = (0, _utils.timeFunction)('Attempt', _attempt2.default, [input]);

    return {
        passed: attemptedAnswer === answer,
        answer: answer,
        attempt: attemptedAnswer
    };
}