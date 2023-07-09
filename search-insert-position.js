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

/*
In JavaScript, the ellipsis or "dots" can be used in various contexts. 
Here are a few use cases:

1. Spread Syntax: The spread syntax, represented by three dots (...), 
allows you to expand an iterable (like an array or string) 
into individual elements. 
It is commonly used in function calls or array literals.

const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

2. Rest Parameters: The rest parameter syntax, also represented 
by three dots (...), allows you to represent an indefinite number 
of arguments as an array within a function. 
It captures the remaining arguments into an array, 
making it useful when you want to work with an 
arbitrary number of parameters. 

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30

3. Object Spread Syntax: Starting from ECMAScript 2018 (ES2018), 
JavaScript also introduced the object spread syntax, 
which allows you to create shallow copies of objects or 
merge multiple objects into a new object. 
It uses the same three-dot notation.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5, 6)); // Output: [12, 15, 18]

Arrow function expressions in JavaScript provide a concise syntax 
for defining functions. They are commonly used when you need to 
define anonymous functions or when you want to preserve the 
lexical this binding. Here are some examples to 
explain arrow function expressions:

1. Basic Syntax:
const square = (x) => {
  return x * x;
};
console.log(square(5)); // Output: 25

2. Implicit Return:
const double = (x) => x * 2;
console.log(double(3)); // Output: 6

3. No Parameters:
const sayHello = () => {
  console.log("Hello!");
};
sayHello(); // Output: Hello!

4. Lexical this Binding:
Arrow functions have a lexical this binding, which means 
that they inherit the this value from the surrounding code. 
This behavior is different from regular functions, 
where this is determined by how the function is called. 

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const person = new Person();

*/