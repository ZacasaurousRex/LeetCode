import ListNode from '../../../utils/ListNode';

export default function mergeTwoSortedLists(listOne, listTwo) {
    let tempListOne = listOne;
    let tempListTwo = listTwo;
    let tempNode = new ListNode(null);
    const returnNode = tempNode;

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
