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

//Other approach
//https://leetcode.com/problems/search-insert-position/solutions/423166/binary-search-101/

var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};

//Recursive
/*
Recursion is a process of calling itself. 
A function that calls itself is called a recursive function.

// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);
*/

//Other approach
/*
Intuition
Normally we'd solve it via loop but thats computationally consuming so we need to think differently
We can use depth search or even first order search but why complicate it?

Approach
The below approach is simple it includes using Javascript built in methods and it's a good practice on the following:
If you're new to Js or maybe studying react or vue or even anyother framework
Knowing and learning those methods will help you
1- includes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
2-indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
3-rest operator and destructuring
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
4- arrow function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
5-sorting via sort method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

MY ADVICE? READ THE SOLUTION CAREFULLY AND THEN HIT THE SEARCH BUTTON AND CHECK THOSE METHODS LISTED ABOVE,
YOU'LL THANK ME LATER
please upvote if I helped you in anyway :)

Complexity
Time complexity:
O(log n)

Space complexity:
*/

var searchInsert = function(nums, target) {
  // includes,indexOf,rest operator,arrow function,sorting via sort method
   if(nums.includes(target))  //includes method
    return nums.indexOf(target); //returns index method//
   return [...nums, target].sort((a,b) => a-b).indexOf(target); //return where it shold be inserted//

  
};