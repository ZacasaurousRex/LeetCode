'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = constructMaximumBinaryTree;

var _TreeNode = require('../../../utils/TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function constructMaximumBinaryTree(nums) {
    if (nums.length === 0) return null;

    var maximumNumber = Math.max.apply(Math, _toConsumableArray(nums));
    var maximumNumberIndex = nums.indexOf(maximumNumber);
    var rootNode = new _TreeNode2.default(maximumNumber);
    var leftTreeArray = nums.slice(0, maximumNumberIndex);
    var rightTreeArray = nums.slice(maximumNumberIndex + 1, nums.length);

    if (leftTreeArray.length > 0) {
        rootNode.left = constructMaximumBinaryTree(leftTreeArray);
    }

    if (rightTreeArray.length > 0) {
        rootNode.right = constructMaximumBinaryTree(rightTreeArray);
    }

    return rootNode;
}