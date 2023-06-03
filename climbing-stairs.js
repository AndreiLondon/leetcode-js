/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?

Example
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Related Topics
Math, Dynemic Programming, Memoization
*/
function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

//Other solution
var climbStairs = function (n) {

  if (n < 2) {
    return 1;
  }
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;
  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }
  return thirdStep;
};

/*
The approach of the below code is to solve the problem of 
counting the number of ways to climb stairs using dynamic 
programming by implementing the fibonacci sequence.

The function calculates the nth number in the fibonacci 
sequence using a for loop, where n is the number of stairs.

The first two numbers in the sequence are initialized as 
1 and the next numbers are calculated as the sum of the previous two numbers.

The result, the nth number, is returned as the answer 
to the number of ways to climb stairs.
*/

