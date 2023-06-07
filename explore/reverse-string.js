/*
Reverse String

Write a function that reverses a string. 
The input string is given as an array of characters s.

You must do this by modifying the input array in-place 
with O(1) extra memory.

Example:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

var reverseString = function(s) {
    let newArr = [];
    for (let i = s.length - 1; i >= 0; i--) {
        newArr.push(s[i])
        //console.log(newArr)
    }
    return newArr;
};

let words = ["H","a","n","n","a","h"];
console.log(reverseString(words))

//Other approach

var reverseString = function(s) {
    let leftCharacter = 0;
    let rightCharacter = s.length - 1;
    while (leftCharacter < rightCharacter) {
        // Swap the characters at leftCharacter and rightCharacter positions
        let temp = s[leftCharacter];
        s[leftCharacter] = s[rightCharacter];
        s[rightCharacter] = temp;

        // Move the leftCharacter pointer towards the right
        leftCharacter++;

        // Move the rightCharacter pointer towards the left
        rightCharacter--;
    }
};

let words2 = ["H","a","n","n","a","h"];
reverseString(words2);
console.log(words2);

