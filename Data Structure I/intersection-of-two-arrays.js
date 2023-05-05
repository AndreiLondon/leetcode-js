/*
350. Intersection of Two Arrays II
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.
*/

var intersect = function(nums1, nums2) {
    let arr = [];
    for (var i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            arr.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return arr;
};