/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example:
Input: list1 = [], list2 = []
Output: []

Example:
Input: list1 = [], list2 = [0]
Output: [0]

Related Topics
Linked List, Recursion 

BIG-O NOTATION

In computer science, Big O notation is used to describe 
the performance or complexity of an algorithm. 
It represents the upper bound or worst-case scenario of the algorithm's 
time or space requirements as the input size grows.
O(1), pronounced "big O of one" or "constant time," represents an algorithm 
that takes a constant amount of time to run, regardless of the input size. 
It means that the algorithm's execution time remains the same, 
regardless of whether there are 10 elements or 10 million elements to process. 
This is considered the most efficient time complexity.

An example of an O(1) algorithm is accessing an element in an array by its index. 
It requires a simple calculation to retrieve the desired element, 
and the time it takes does not depend on the size of the array.

O(n), pronounced "big O of n" or "linear time," represents an algorithm 
whose execution time grows linearly with the input size. 
It means that as the input size increases, 
the execution time of the algorithm also increases proportionally. 
If an algorithm has O(n) complexity, doubling the input size 
will roughly double the execution time.

An example of an O(n) algorithm is searching for a specific value in an unsorted array 
by iterating through each element until a match is found. 
In the worst case, where the desired element is at the end of the array or not present at all, 
the algorithm needs to check each element, 
resulting in a linear relationship between the input size and execution time.

In summary, O(1) represents constant time complexity, 
indicating an algorithm that executes in the same amount of time regardless of the input size. 
O(n) represents linear time complexity, where the execution time grows linearly with the input size.

*/



// O(1) "big O of one" algorithm is accessing an element in an array by its index. 
// O(n) "big O of n" or "linear time," algorithm is searching for a specific value in an unsorted array 
// by iterating through each element until a match is found.
var mergeTwoLists = function(list1, list2) {
    
};
/*
//Linked list
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

(function main() {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    one.next = two;
    two.next = three;
    let head = one;
    
    console.log(head.val);
    console.log(head.next.val);
    console.log(head.next.next.val);
}());


// let ptr = head;
// head = head.next;
// head = null;

// console.log(head)
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1); // Create a dummy node as the head of the merged list
    let current = dummy; // Set the current pointer to the dummy node
  
    // Iterate through both lists
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        // If the value in list1 is less than or equal to the value in list2
        // Append the node from list1 to the merged list
        current.next = list1;
        list1 = list1.next; // Move the list1 pointer to the next node
      } else {
        // If the value in list2 is less than the value in list1
        // Append the node from list2 to the merged list
        current.next = list2;
        list2 = list2.next; // Move the list2 pointer to the next node
      }
      current = current.next; // Move the current pointer to the newly added node
    }
  
    // Append any remaining nodes in list1 or list2 to the merged list
    if (list1 !== null) {
      current.next = list1;
    }
  
    if (list2 !== null) {
      current.next = list2;
    }
  
    return dummy.next; // Return the head of the merged linked list
  }
  
