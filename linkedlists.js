//Linked Lists


/*
A linked list is a data structure that is similar to an array. 
It also stores data in an ordered manner, but it is implemented using node objects 
(you will have a custom class). Each node will have a "next" pointer, 
which points to the node representing the next element in the sequence.

   Head          Tail
    |              |
    v              v
+---+---+    +---+---+    +---+----+
| 10 | *---->| 20 | *---->| 30 |null|
+---+---+    +---+---+    +---+----+

In this representation, the Head pointer points to the first node (10) 
in the linked list, and the Tail pointer points to the last node (30). 
Each node consists of two parts: the data field, which holds the value, and the next pointer, 
represented by an arrow, which points to the next node in the list.

The * symbol represents the next pointer.

Note that in the last node, 
the next pointer is null, indicating the end of the list.

let n1 {
    data = 100
};
let n2 {
    data = 200
};
n1.next = n2;
console.log(n1)
*/

class Node {
    constructor(data, next = null) {
        this.data = data;
        //this.next = null;
        this.next = next;
    }
}

// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

// Insert fisrt node 
insertFirst(data) {
    this.head = new Node(data, this.head);
}
    /*
    The insertFirst method takes a data parameter, 
    which represents the value of the new node to be inserted.

    this.head - if we want to insert the first one here (10) and 
    if there's already something in the head then we want to push that to the next.
    If the head in null (meaning the list is empty) then it will be the first node
    in the list.

    +---+---+    +---+---+    +---+----+
    | 10 | *---->| 20 | *---->| 30 |null|
    +---+---+    +---+---+    +---+----+
    */

    //Print lust data
};

 const ll = new LinkedList();
 ll.insertFirst(100);
 console.log(ll); 
