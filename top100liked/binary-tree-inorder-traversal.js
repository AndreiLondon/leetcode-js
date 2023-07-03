/*
Given the root of a binary tree, 
return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Related Topics
Stack, Tree, Depth-First Search, Binary Tree
*/

var inorderTraversal = function(root) {
    const result = []; // Array to store the inorder traversal
  
    // Helper function to perform inorder traversal
    const inorder = function(node) {
      if (node === null) {
        return; // Base case: If node is null, return
      }
  
      inorder(node.left); // Recursively traverse the left subtree
      result.push(node.val); // Visit the current node and push its value to the result array
      inorder(node.right); // Recursively traverse the right subtree
    };
  
    inorder(root); // Start the inorder traversal from the root node
  
    return result; // Return the inorder traversal
  };
  
