/*
118. Pascal's Triangle
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

2 = 1 + 1;
3 = 2 + 1;
4 = 3 + 1;
6 = 3 + 3;
and so on ...

Example:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example:
Input: numRows = 1
Output: [[1]]

https://dev.to/alisabaj/solving-pascal-s-triangle-in-javascript-4e59
   
*/

var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for(let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }

        }
        result.push(arr);
    }
    return result; 
};

numRows = 5
console.log(generate(numRows))

//Other solution
var generate = function(numRows) {
    // Initialize the triangle with the first row containing only 1
    let triangle = [[1]];
    // Loop to generate subsequent rows of the triangle
    for (let i = 1; i < numRows; i++) {
        // Create a new array for the current row and set its first element as 1
        const newArr = [1];
        // Loop to calculate the elements of the current row
        for (let j = 1; j < i; j++) {
            // Calculate each element by adding the corresponding elements from the previous row
            newArr.push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
        }
        // Push 1 to the end of the current row
        newArr.push(1);   
        // Push the current row to the triangle array
        triangle.push(newArr);
    }
    // Return the generated Pascal's Triangle
    return triangle;
};
