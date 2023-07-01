/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be 
if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

Input: nums = [1,3,5,6], target = 7
Output: 4

Related Topics
Array, Binary Search
*/

// var searchInsert = function(nums, target) {
//     //let counter = 0;
//     let left = 0;
//     let right = nums.length -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) /2 );
//         if (nums[mid] === target) {
//             //counter++;
//             // do something
//             return 
//         }
//         if (nums[mid] > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//       // target is not in arr, but left is at the insertion point
//       return left;

// };

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        // Target found at index mid
        return mid;
      }
  
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    // Target is not in nums, but left represents the insertion point
    return left;
  };

let newArr = [1, 2, 3, 4, 5, 6, 7]
console.log(searchInsert(newArr, 5));

