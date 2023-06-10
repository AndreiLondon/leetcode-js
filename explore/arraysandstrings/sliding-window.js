// Sliding Window

/* contiguous - sharing a common border; touching.
a subarray is a contiguous section of the array. 
All the elements must be adjacent to each other in 
the original array and in their original order.
[1, 2, 3, 4]

[1], [2], [3], [4]
[1, 2], [2, 3], [3, 4]
[1, 2, 3], [2, 3, 4]



A subarray can be defined by two indices, the start and end. 

Whenever a problem description talks about subarrays,
you should figure out if sliding window is a good option
by analyzing the problem description.

Find the longest subarray with a sum less than or equal to k
Find the longest substring that has at most one "0"
Find the number of subarrays that have a product less than k
*/

//Implementation

/*
we need to identify a constraint metric. 
In our example, the constraint metric is the sum of the window.
*/

function fn(nums, k) {
    let left = 0;
    let curr = 0;
    let answer = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }
        answer = max(answer, right - left + 1);
    }
    return answer;
}
