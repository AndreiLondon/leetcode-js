/*
Middle of the Linked List 

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

class ListNode {
    constructor(val) {
        //constructor
        this.val = val;
        //this here to indicate specifically this val but noth that val.
        this.next = null;
        //this.next means the value next val points to null
    }
}

var middleNode = function (head) {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
        console.log(head)
    }

    return ans;
};
let arr = [1, 2, 3, 4, 5, 6]
console.log(middleNode(arr));
