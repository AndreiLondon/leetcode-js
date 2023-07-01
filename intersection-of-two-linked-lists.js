/*
160. Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, 
return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Related Topics
Hash Table, Linked List, Two Pointers
*/

var getIntersectionNode = function(headA, headB) {
    // Step 1: Calculate the lengths of the lists
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    
    // Step 2: Calculate the difference in lengths
    let diff = Math.abs(lenA - lenB);
    
    // Step 3: Move the pointer of the longer list forward by 'diff' steps
    let pointerA = headA;
    let pointerB = headB;
    
    if (lenA > lenB) {
        for (let i = 0; i < diff; i++) {
            pointerA = pointerA.next;
        }
    } else {
        for (let i = 0; i < diff; i++) {
            pointerB = pointerB.next;
        }
    }
    
    // Step 4: Find the common node or reach the end of the lists
    while (pointerA !== null && pointerB !== null) {
        if (pointerA === pointerB) {
            // Step 5: Common node found
            return pointerA;
        }
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    
    // Step 6: No intersection found
    return null;
};

// Helper function to calculate the length of a linked list
function getLength(head) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

//Other approach

var getIntersectionNode = function(headA, headB) {
    
    // General idea: Switch tracks at the end, so you even out un-even linked lists
    // they will sync up at the intersection that way. Now you can straight up do a comparison
    // For example: 
    // A will follow 4 - 1 - 8 - 4 - 5 - 5 - 0 - 1 - 8
    // B will follow 5 - 0 - 1 - 8 - 4 - 5 - 4 - 1 - 8
    
    // Now we need to account for the case where they don't intersect, or our loop
    // would run forever. If after switching tracks, they both reach null at the same time
    // that's when we know to stop
    
    // Basic leetcode input checks;
    if (!headA || !headB) {
        return null;
    }
    
    // current nodes
    let curA = headA;
    let curB = headB;
    
    // our end check. this works because we switch track to sync up
    while (curA !== curB) {
        
        if (curA.next) {
            // regular follow the path
            curA = curA.next;
        } else {
        
            if (!curB.next) {
                // if curB also reaches null next, we've ended up at the end without
                // any match found. break out of the loop and return null now.
                curA = null;
                curB = null;
                break;
            }
            // switch tracks to even out uneven length
            curA = headB;
        }
        
        if (curB.next) {
            // regular follow the path
            curB = curB.next 
        } else {
            // switch tracks to even out uneven length
            curB = headA;
        }
    }
    
    return curB;
};

//Other Solution

let getIntersectionNode = function(headA, headB) {
    if(headA===null || headB===null) {
        return null;
    }
    let r1=headA;
    let r2=headB;
    while(r1!==r2){
        r1=r1.next;
        r2=r2.next;
        if(r1===r2){
           return r1;
        }
        if (r1===null){
          r1=headB;  
        }
        if(r2===null){
            r2=headA;
        }
    }
    return r1;
};

// Other approach

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)return null
    let a = headA, b = headB
    while(a !== b){
        a = a.next
        b = b.next
        if(!a && !b)return a
        if(!a)a = headB
        if(!b)b = headA
    }
    return a
};