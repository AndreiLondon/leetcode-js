//Linked Lists

/*
A linked list is a data structure that is similar to an array. 
It also stores data in an ordered manner, but it is implemented using node objects 
(you will have a custom class). Each node will have a "next" pointer, 
which points to the node representing the next element in the sequence.
*/

// class ListNode {
//     constructor(val) {
//     //constructor
//         this.val = val;
//         //this here to indicate specifically this val but noth that val.
//         this.next = null;
//         //this.next means the value next val points to null
//     }
// }
// (function main() {
//     let one = new ListNode(1);
//     let two = new ListNode(2);
//     let three = new ListNode(3);
//     one.next = two;
//     two.next = three;
//     let head = one;
    
//     console.log(head.val);
//     console.log(head.next.val);
//     console.log(head.next.next.val);
// }());

//Pointer
// let ptr = head;
// head = head.next;
// head = null;


//Iterating forward 
let getSum = head => {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
        console.log(head)
    }

    return ans;
}

head = 5
console.log(getSum(head))

//Recursively
let getSum1 = head => {
    if (!head) {
        return 0;
    }

    return head.val + getSum1(head.next);
}

console.log(getSum1(5))

//Singly linked list
/*
In a singly linked list, each node only has a pointer to the next node. 
This means you can only move forward in the list when iterating. 
The pointer used to reference the next node is usually called next.
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// Let prevNode be the node at position i - 1
let addNode = (prevNode, nodeToAdd) => {
    nodeToAdd.next = prevNode.next;
    prevNode.next = nodeToAdd;
}

//Let's say you want to delete the element at position i
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// Let prevNode be the node at position i - 1
let deleteNode = prevNode => {
    prevNode.next = prevNode.next.next;
}

//Doubly linked list
//A doubly linked list is like a singly linked list, 
//but each node also contains a pointer to the previous node.

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let addNode = (node, nodeToAdd) => {
    let prevNode = node.prev;
    nodeToAdd.next = node;
    nodeToAdd.prev = prevNode;
    prevNode.next = nodeToAdd;
    node.prev = nodeToAdd;
}

let deleteNode = node => {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}
