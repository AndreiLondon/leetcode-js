/*
350. Intersection of Two Arrays II
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.

The includes() method determines whether an array includes a certain value among its entries, 
returning true or false as appropriate.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false


The push() method adds the specified elements 
to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

The splice() method changes the contents of an array by removing or 
replacing existing elements and/or adding new elements in place.
To create a new array with a segment removed and/or replaced without 
mutating the original array, use toSpliced(). 
To access part of an array without modifying it, see slice().

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

The indexOf() method returns the first index at which a given element 
can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

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