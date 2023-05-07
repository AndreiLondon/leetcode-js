/*
387. First Unique Character in a String
Given a string s, find the first non-repeating character in it 
and return its index. If it does not exist, return -1.

Examples:

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
*/

var firstUniqChar = function (s) {   // Declare a function that takes in a string argument 's' and assigns it to the variable 'firstUniqChar'
    const charCount = {};   // Declare an empty object to store the count of each character in the string
    
    // Count the occurrence of each character in the string
    for (let i = 0; i < s.length; i++) {   // Loop through each character in the string using a for loop
        const char = s[i];   // Assign the current character to the variable 
        charCount[char] = (charCount[char] || 0) + 1;   // Increment the count of the current character in the 'charCount' object
    }
    
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {   // Loop through each character in the string again using a for loop
        const char = s[i];   // Assign the current character to the variable 
        if (charCount[char] === 1) {   // If the count of the current character in the 'charCount' object is equal to 1
            return i;   // Return the index of the current character
        }
    }
    
    // No non-repeating character found
    return -1;   // Return -1 if no non-repeating character is found in the string
}


//Other solution

/*
In JavaScript, new Array(n) creates a new array with n elements. 
The elements in the array are initially undefined.
In the code new Array(26).fill(0), a new array with 26 elements is created and 
then filled with the value 0 using the fill method. 
This creates an array of 26 zeroes, which can be used as a helper array 
to keep track of the count of each character in a string.

The reason why the array length is set to 26 is that there are 26 letters in the English alphabet, 
and this helper array is typically used to count the occurrences of each letter in a string. 
Each element in the array represents the count of a specific letter, 
with the first element representing the count of the letter 'a', 
the second element representing the count of the letter 'b', and so on. 
By subtracting 97 (the Unicode value of the letter 'a') from the Unicode value of a character, 
we can get the index of the corresponding element in the helper array.

For example, if we want to count the occurrences of each letter in the string "leetcode", 
we can use this helper array and increment the count of each letter as we traverse the string.
*/
var firstUniqChar = function(s) {
    const helper = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        helper[s.charCodeAt(i) - 97]++;
    }
    for(let i = 0; i < s.length; i++){
        if(helper[s.charCodeAt(i) - 97] == 1){
            return i;
        }
    }
    return -1;
};

/*
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.



This line of code is incrementing the count of a specific character in the helper array.
s.charCodeAt(i) returns the Unicode value of the character at index i in the string s. 
By subtracting 97 from this value, we get the zero-based index 
of the corresponding element in the helper array.

For example, if the character at index i is 'a', then s.charCodeAt(i) will return 97, 
and helper[s.charCodeAt(i) - 97] will refer to the first element in the helper array 
(i.e., the element that represents the count of 'a' in the string). 
Similarly, if the character at index i is 'b', then helper[s.charCodeAt(i) - 97] will refer 
to the second element in the helper array (i.e., the element that represents the count of 'b' in the string).
*/

word = "Hello Word"
console.log(firstUniqChar(word));