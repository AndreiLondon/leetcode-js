/*
Just like with a linked list, binary trees are 
implemented using objects of a custom class.

In binary tree problems, you will be given a reference 
to the root of a binary tree as the input. 
You can access the root's left subtree with root.left and 
the root's right subtree with root.right. 
Like with linked lists, each node will also carry a 
value val as data. In a linked list, the tail (last node) 
has its next pointer as null. In a binary tree, 
if a node does not have a left child, then node.left 
will be null, and vice-versa with the right child. 
Remember that if both children are null, then the node is a leaf.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
Binary trees - DFS
Recall that the depth of a node is its distance from the root.
*/

let getSum = head => {
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }

    return ans;
}

/*
The above code starts at the head and visits each node 
to find the sum of all values in the linked list.

For each node, there is a moment in the code execution 
where the head variable is referencing the node. 
We traverse by using the .next attribute.

Traversing a binary tree follows the same idea. 
We start at the root and traverse by using the child 
pointers .left and .right. When traversing linked lists, 
we usually do it iteratively. With binary trees, 
we usually do it recursively.

There are two main types of tree traversals. 
The first is called depth-first search (DFS). 
For binary trees specifically, there are 3 ways 
to perform DFS - preorder, inorder, and postorder 
(don't worry though, the type you choose rarely matters). 
The other main type of traversal is called breadth-first 
search (BFS). Let's start by looking at DFS.

*/

/*
Each call to dfs(node) is visiting that node. 
As you can see in the code, we visit the left child 
before visiting the right child.
*/ 

let dfs = node => {
    if (!node) {
        return;
    }
    dfs(node.left);
    dfs(node.right);
    return;
}
