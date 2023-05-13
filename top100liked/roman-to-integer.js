/*
13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral,
just two ones added together. 12 is written as XII, which is simply X + II.
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example
Input: s = "III"
Output: 3
Explanation: III = 3.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Related Topics
Hash Table, Math, String

*/

/*
Hash Table
We need a class to represent the hash table. 
The class will include functions for computing hash values, 
a function for inserting data into the hash table, 
a function for retrieving data from the hash table, 
and a function for displaying the distribution of data in the hash table, 
as well as various utility functions we might need.


The choice of a hash function depends on the data type of the key. 
If your key is an integer, then the simplest hash function is to return 
the key modulo the size of the array. 
There are circumstances when this function is not recommended, 
such as when the keys all end in 0 and the array size is 10. 
This is one reason the array size should always be a prime number, 
such as 137, which is the value we used in the preceding constructor function.
*/

// Define a HashTable class
function hashTable() {
  this.table = new Array(6); // Create an array to store the key-value pairs
  this.hash = simpleHash; // Choose a hash function
  this.put = put; // Define the put method
  this.get = get; // Define the get method
  this.showData = showData; // Define a method to display the contents of the table
}

// Define a simple hash function that sums the ASCII codes of the key characters
function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

// Define the put method to insert a key-value pair into the table
function put(key, data) {
  var pos = this.hash(key);
  this.table[pos] = data;
}

// Define the get method to retrieve a value based on its key
function get(key) {
  return this.table[this.hash(key)];
}

// Define a method to display the contents of the table
function showData() {
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] !== undefined) {
      console.log(i + ": " + this.table[i]);
    }
  }
}

// Create a new hash table and insert some key-value pairs
var hTable = new hashTable();
// hTable.put("John", "jdoe@gmail.com");
// hTable.put("Jane", "jane@example.com");
// hTable.put("Bob", "bob@example.com");
// hTable.put("Alice", "alice@example.com");
hTable.put("I", 1)
hTable.put("V", 5)
hTable.put("X", 10)
hTable.put("L", 50)
hTable.put("C", 100)
hTable.put("D", 500)
hTable.put("M", 1000)
// Display the contents of the table
hTable.showData();

function romanToInt(s) {
  const romanToIntMap = {  // create a lookup table of roman numeral symbols and their corresponding integer values
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;  // initialize the result to zero

  for (let i = 0; i < s.length; i++) {  // loop through each character in the roman numeral string
    const currentSymbol = s[i];  // get the current symbol

    const currentValue = romanToIntMap[currentSymbol];  // look up the integer value for the current symbol in the lookup table
    console.log(currentValue)

    const nextSymbol = s[i + 1];  // get the next symbol (if it exists)

    const nextValue = romanToIntMap[nextSymbol];  // look up the integer value for the next symbol in the lookup table (if it exists)

    if (nextValue && nextValue > currentValue) {  // if the next value is greater than the current value (indicating a subtraction)
      result -= currentValue;  // subtract the current value from the result
    } else {
      result += currentValue;  // otherwise, add the current value to the result
    }
  }

  return result;  // return the final result
}




