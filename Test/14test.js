// Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("orange"));
// Given an array of numbers, write a function that returns the sum of all the even numbers in the array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evensum(numbers));
function evensum(arr) {
  return arr
    .filter((value) => value % 2 == 0)
    .reduce((pre, crunt) => pre + crunt);
}
// Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function conctnum(num1, num2) {
  let unicarray = num1;
  for (let value of num2) {
    if (!num1.includes(value)) {
      unicarray.push(value);
    }
  }
  return unicarray;
}
console.log(conctnum(num1, num2));
// Given an array of strings, write a function that returns the longest string in the array.
let string = ["apple", "banana", "orasnge"];
function longcheck(arr) {
  largestString = "";
  arr.forEach((value) => {
    console.log(value, value.length, largestString.length, largestString);
    if (value.length > largestString.length) {
      largestString = value;
    }
  });
  return largestString;
}
console.log(longcheck(string), "36");
// Write a function that takes an array of numbers and returns the largest number in the array.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function longcheck(arr) {
  largestnum = 0;
  arr.forEach((value) => {
    if (value > largestnum) {
      largestnum = value;
    }
  });
  return largestnum;
}
console.log(longcheck(nums));

// Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.
let evennums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf;
function even(arr) {
  arr.forEach((value) => {
    if (value % 2 === 1) {
      evennums.splice(value.indexOf(), 1);
    }
  });
  return evennums;
}
console.log(longcheck(nums));
// Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

// Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

// Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

// Write a function that takes an array of numbers and returns the average of all the numbers in the array.

// Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

// Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

// Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

// Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

// Write a function that takes an array of strings and sorts them by their length in ascending order.

// // Example usage
// let strings = ["apple", "banana", "cherry", "date"];
// console.log(sortStringsByLength(strings)); // Output: ["date", "apple", "cherry", "banana"]
// Write a function that takes an array of numbers and returns the second highest number.

// Write a function that takes an array of numbers and returns a new array with all the unique numbers.

// Write a function that takes an array of strings and returns a new array with only the strings that contain the letter

function checkWorda(arr) {
  return arr.filter((value) => value.split().includes("a"));
}
save = arrsorted(["hello", "world", "wecode"]);
console.log(save);
// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function arrsorted(arr) {
  return arr.sort((a, b) => a - b);
}
save = arrsorted([14, 46, 72, 24, 2]);
console.log(save);

// Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.
let arr = ["hello", "world", "wecode"];
function stringflatte(arr) {
  return arr.reduce((pre, crunt) => pre + crunt).split("");
}
save = stringflatte(arr);
console.log(save);
// // Example usage
// let arr = ['hello', 'world'];
// console.log(flattenStrings(arr)); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
