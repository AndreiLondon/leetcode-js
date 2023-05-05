/*217. Contains Duplicate
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.
Input: nums = [1,2,3,1]
Output: true
Input: nums = [1,2,3,4]
Output: false
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Set() The Set object lets you store unique values of any type, 
whether primitive values or object references.
The has method checks if a value is in the set, using an approach that is, 
on average, quicker than testing most of the elements that have previously 
been added to the set. In particular, it is, on average, 
faster than the Array.prototype.includes method 
when an array has a length equal to a set's size.
*/

var containsDuplicate = function(nums) {
    let set = new Set(); // create a Set to keep track of unique elements
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) { // if the Set already contains the current element, return true
        console.log(set);
        return true;
      } else {
        set.add(nums[i]); // add the current element to the Set
      }
    }
    return false; // if we reach this point, every element is distinct
};
let arg = [1,1,1,3,3,4,3,2,4,2]
let arg2 = [1,2,3,4]
console.log(containsDuplicate(arg2))


