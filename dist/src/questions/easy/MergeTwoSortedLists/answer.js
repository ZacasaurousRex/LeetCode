'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mergeTwoSortedLists;

var _ListNode = require('../../../utils/ListNode');

var _ListNode2 = _interopRequireDefault(_ListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeTwoSortedLists(listOne, listTwo) {
    var tempListOne = listOne;
    var tempListTwo = listTwo;
    var tempNode = new _ListNode2.default(null);
    var returnNode = tempNode;

    while (tempListOne && tempListTwo) {
        if (tempListOne.val < tempListTwo.val) {
            tempNode.next = tempListOne;
            tempListOne = tempListOne.next;
        } else {
            tempNode.next = tempListTwo;
            tempListTwo = tempListTwo.next;
        }
        tempNode = tempNode.next;
    }
    tempNode.next = tempListOne || tempListTwo;
    return returnNode.next;
}