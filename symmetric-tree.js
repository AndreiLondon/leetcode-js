//Given the root of a binary tree, check whether 
//it is a mirror of itself (i.e., symmetric around its center).


/*
Intuition
At first i was thinking to solve it with iterative approach, 
but it would be costly to use a queue for this, so i 
thought to use the recursive approach.

Approach
We use recursive approach to solve this problem, 
the tree would be symmetric if it's foldable you know, 
so we should start by checking first if the root 
is null so we have a symmetric tree.

A tree would only be foldable - symmetric - if 
the left sub-tree leftNode is equivalent to the right 
sub-tree rightNode and left sub-tree rightNode is 
equivalent to right sub-tree leftNode.

so we build isMirror function that takes two nodes 
the left sub-tree parent and the right sub-tree parent 
and start the comparison as mentioned 
above in the second point.

If there is any failure for any tested condition the 
function will be terminated and return false so we don't 
have to check any more, that's because we are processing 
the tree level by level, so that's why we will be using 
o(h) where is h is the height of the tree at worst case.

Complexity
Time complexity: O(n) where is n is the nodes number 
because we check every single node.
Space complexity: O(h) where is h is the tree height.

*/
var isSymmetric = function(root) {
    if(root == null) return true;
    return isMirror(root.left, root.right);
}; 

const isMirror = (leftNode, rightNode) => {
    if(leftNode == null && rightNode == null) return true;
    if(leftNode == null || rightNode == null) return false;
    if(leftNode.val !== rightNode.val) return false;
   
    return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left);
}