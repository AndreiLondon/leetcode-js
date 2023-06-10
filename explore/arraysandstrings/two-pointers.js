/*
Two Pointers 

Start one pointer at the first index 0 and 
the other pointer at the last index input.length - 1.
Use a while loop until the pointers are equal to each other.
At each iteration of the loop, move the pointers towards each other. 
This means either increment the pointer that started at the first index, 
decrement the pointer that started at the last index, or both. 
Deciding which pointers to move will depend on the problem 
we are trying to solve.

function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--

Another approach
Move along both inputs simultaneously until all elements have been checked.
Converting this idea into instructions:

Create two pointers, one for each iterable. 
Each pointer should start at the first index.
Use a while loop until one of the pointers 
reaches the end of its iterable.
At each iteration of the loop, move the pointers forward. 
This means incrementing either one of the pointers 
or both of the pointers. Deciding which pointers to move 
will depend on the problem we are trying to solve.
Because our while loop will stop when one of the pointers 
reaches the end, the other pointer will not be at the 
end of its respective iterable when the loop finishes. 
Sometimes, we need to iterate through all elements - if 
this is the case, you will need to write extra code here 
to make sure both iterables are exhausted.

function fn(arr1, arr2):
    i = j = 0
    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    // Note that only one of these loops would run
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
*/

/*
Example 1: Given a string s, return true if it is a palindrome, 
false otherwise.
A string is a palindrome if it reads the same forward as backward. 
That means, after reversing it, it is still the same string. 
For example: "abcdcba", or "racecar".
*/
var checkIfPalindrome = function (s) {
    // Initialize two pointers, 'left' pointing to the start of the string and 'right' pointing to the end of the string
    let left = 0;
    let right = s.length - 1;

    // Iterate until the two pointers meet in the middle
    while (left < right) {
        // Compare the characters at 'left' and 'right' positions
        if (s[left] != s[right]) {
            // If the characters are not equal, the string is not a palindrome
            return false;
        }

        // Move the 'left' pointer towards the right and 'right' pointer towards the left
        left++;
        right--;
    }

    // If the loop completes without returning false, the string is a palindrome
    return true;
}


console.log(checkIfPalindrome("racecar"))

/*
Example 2: Given a sorted array of unique integers 
and a target integer, return true if there exists 
a pair of numbers that sum to target, false otherwise. 
This problem is similar to Two Sum.

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] 
and target = 13, return true because 4 + 9 = 13.

*/


var checkForTarget = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true;
        }
        
        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return false;
}

let nums = [1, 2, 4, 6, 8, 9, 14, 15]
console.log(checkForTarget(nums, 13))

/*
Example 3: Given two sorted integer arrays arr1 and arr2, 
return a new array that combines both of them and is also sorted.

In the explanation prior to this example, 
we declared n = arr1.length and m = arr2.length. 
Here, we are saying n = arr1.length + arr2.length.
Why? Remember that when it comes to big O, 
we are allowed to define the variables as we see fit. 
We could certainly stick to using n, m. 
In that case, the time complexity of the sorting approach 
would be O ((n + m)) * log(m + n)) and the time complexity 
of the approach we are about to cover would be O(n + m).
It doesn't really make a difference, but one justification 
we could give here is that since we are combining the arrays, 
the total length is a significant number, so it makes sense 
to represent it as n.
*/

var combine = function(arr1, arr2) {
    let answer = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            answer.push(arr1[i]);
            i++;
        } else {
            answer.push(arr2[j]);
            j++;
        }
    }
    /*After this while loop one of the array will be exhausted, 
    but the other one will not be. So we need to write the extra code
    to make sure we exhauste both list
    */
    
    //to exhauste arr 1
    while (i < arr1.length) {
        answer.push(arr1[i]);
        i++;
    }
    //to exhauste arr 2
    while (j < arr2.length) {
        answer.push(arr2[j]);
        j++;
    }
    
    return answer;
}

/*
Example 4: 392. Is Subsequence.

Given two strings s and t, return true if s is a subsequence of t, 
or false otherwise.

A subsequence of a string is a sequence of characters that can be 
obtained by deleting some (or none) of the characters from the 
original string, while maintaining the relative order of the 
remaining characters. For example, "ace" is a subsequence of "abcde" 
while "aec" is not.
*/

var isSubsequence = function(s, t) {
    //initiate 2 pointers which start from 0
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        
        j++;
    }
    
    return i == s.length;
};

let word = "ace";
let word2 = "abcde";

console.log(isSubsequence("car", word2));