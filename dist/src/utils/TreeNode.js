"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListNode = function ListNode(val) {
    _classCallCheck(this, ListNode);

    this.val = val;
    this.left = null;
    this.right = null;
};

exports.default = ListNode;