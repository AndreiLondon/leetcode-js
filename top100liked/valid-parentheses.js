/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example
Input: s = "()"
Output: true

Example
Input: s = "()[]{}"
Output: true

Example
Input: s = "(]"
Output: false

Related Topics
String, Stack

Stack
https://www.freecodecamp.org/news/stack-5404d9735f88/#:~:text=A%20stack%20is%20an%20ordered,elements%20are%20at%20the%20bottom.
*/

var isValid = function(s) {
    // Initialize a stack to keep track of open brackets
    let stack = [];
  
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i);
  
      // If it's an open bracket, push it onto the stack
      if (c === '(' || c === '[' || c === '{') {
        stack.push(c);
      }
      // If it's a close bracket, check if it matches the most recent open bracket on the stack
      else if (c === ')' && stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop();
      } else if (c === ']' && stack.length > 0 && stack[stack.length - 1] === '[') {
        stack.pop();
      } else if (c === '}' && stack.length > 0 && stack[stack.length - 1] === '{') {
        stack.pop();
      }
      // If it's not an open or close bracket, return false
      else {
        return false;
      }
    }
  
    // If the stack is empty, all brackets were matched and the string is valid
    return stack.length === 0;
  }

//Other solution 
var isValid = function(s) {
    // Initialize stack to store the closing brackets expected...
    let stack = [];
    // Traverse each charater in input string...
    for (let idx = 0; idx < s.length; idx++) {
        // If open parentheses are present, push it to stack...
        if (s[idx] == '{') {
            stack.push('}');
        } else if (s[idx] == '[') {
            stack.push(']');
        } else if (s[idx] == '(') {
            stack.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if (stack.pop() !== s[idx]) {
            return false;
        }
    }
    return !stack.length;
};
  

var arg = "()";
result = isValid(arg)
console.log(result)

