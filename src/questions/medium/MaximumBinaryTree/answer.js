import TreeNode from '../../../utils/TreeNode';

export default function constructMaximumBinaryTree(nums) {
    if (nums.length === 0) return null;

    const maximumNumber = Math.max(...nums);
    const maximumNumberIndex = nums.indexOf(maximumNumber);
    const rootNode = new TreeNode(maximumNumber);
    const leftTreeArray = nums.slice(0, maximumNumberIndex);
    const rightTreeArray = nums.slice(maximumNumberIndex + 1, nums.length);

    if (leftTreeArray.length > 0) {
        rootNode.left = constructMaximumBinaryTree(leftTreeArray);
    }

    if (rightTreeArray.length > 0) {
        rootNode.right = constructMaximumBinaryTree(rightTreeArray);
    }

    return rootNode;
}
