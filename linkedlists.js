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
        this.size++;
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
    //Insert last data
    insertLast(data) {
        let node = new Node(data);
        let current;

        //If empty, make head
        // if(this.head = null) {}
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //Insert at Index
    insertAtIndex(data, index) {
        //If index os out of range
        if (index > 0 && index > this.size) {
            return;
        }
        //If first index
        //If we want to put it at index 0 as an example
        //We can also reuse this.insertFirst(data)
        //this.head to push that over
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        //We done the first, let's take care of them the rest 
        const node = new Node(data);
        let current, previous;
        /*
        +---+---+    +---+---+    +---+----+
        | 10 | *---->| 20 | *---->| 30 |null|
        +---+---+    +---+---+    +---+----+
        */
        //Set current to first 
        current = this.head;
        let count = 0;
        //loop
        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; //Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    //Get at Index

    getAtIndex(index) {
        let current = this.head;
        let count = 0;

        //loop
        while (current) {
            if (count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next
        }
        return null;
    }

    // Remove at Index
    removeAtIndex(index) {
        //Check the index
        if (index > 0 && index > this.size) {
            //If it's out range we just return
            return;
        }
        //Set a marker o current variable to a first node.
        let current = this.head;
        let previous;
        let count = 0;

        //So if it's the first
        //Remove first
        if (index === 0) {
            //we're just setting the head to whatever the next value is (10 --> 20)
            this.head = current.next;
            //If it's not == to 0
        } else {
            while(count < index) {
                //increase the count
                count++;
                previous = current;
                //we're just setting the current value to whatever the next value is
                current = current.next;
            }
            //To remove the element
            previous.next = current.next;
        }
        //Then since we removed we need to decrease the size
        this.size--;
    }

    //Clear the List
    clearTheList() {
        this.head = null;
        this.size = 0;
    }

    //Print last data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
};

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAtIndex(300, 2)
ll.removeAtIndex(0)
ll.printListData();
//ll.getAtIndex(1);

