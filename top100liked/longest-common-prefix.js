/*
14. Longest Common Prefix 

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Related Topics
String, Trie
*/

var longestCommonPrefix = function (strs) {
    // If the input array is empty or undefined, return an empty string
    if (!strs || strs.length === 0) {
        return "";
    }

    // Initialize prefix to be the first string in the array
    let prefix = strs[0];

    // Loop through all the strings in the array starting from the second string
    for (let i = 1; i < strs.length; i++) {
        // While the prefix is not a substring of the current string, remove the last character from the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            // If the prefix becomes empty, there is no common prefix, return an empty string
            if (prefix === "") {
                return "";
            }
        }
    }

    // Return the longest common prefix
    return prefix;
};


