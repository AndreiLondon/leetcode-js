/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example
Input: nums = [3,3], target = 6
Output: [0,1]

Related Topics
Array, Hash Table

Array.prototype.map()
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array.

Map.prototype.has()
The has() method returns a boolean indicating whether an element 
with the specified key exists or not.

*/

//Using Map
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
let arg1 = [2, 7, 11, 15]
let arg2 = 9

console.log(twoSum(arg1, arg2))

//Two Arrays
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) { // use let instead of var, and start loop from 0
    let firstNumber = nums[i]
    for (let j = i + 1; j < nums.length; j++) { // start inner loop from i + 1
      let secondNumber = nums[j]
      if (firstNumber + secondNumber == target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]; // add space before and after the array brackets
}

//Hash Table

//Sorting, Two Pointers

function twoSum(nums, target) {
  nums.sort();
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right]
    if (target === sum) {
      return [left, right];
    } else if (target > sum) {
      left += 1;
    } else {
      right -= 1;
    }
  }return [-1, -1]

};

let arg13 = [2, 7, 11, 15]
let arg23 = 9

console.log(twoSum(arg13, arg23))