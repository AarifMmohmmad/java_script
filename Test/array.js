// 1. Check if the array is sorted in ascending order.

let array1 = [1, 4, 5, 6, 7, 8];
let sortedArray = [1, 4, 5, 6, 7, 8].sort((a, b) => a - b);

if (array1.toString() == sortedArray.toString()) {
  console.log("array sorted");
} else {
  console.log("not sorted");
}
// 2. Check if the array is sorted in descending order.
let array2 = [1, 23, 4, 5, 6, 7, 8, 5];
let sortedArray2 = [1, 23, 4, 5, 6, 7, 8, 5].sort((a, b) => a + b);

if (array1.toString() == sortedArray.toString()) {
  console.log("array sorted");
} else {
  console.log("not sorted");
}
// 3. Concat two Arrays but without using concat function
let array3 = [1, 23, 4, 5, 6, 7, 8, 5];
let arrayConct3 = [1, 23, 4, 5, 6, 7, 8, 5];

array3.push(arrayConct3);
array3.flat(); // frist method
concat = [array3 + arrayConct3].flat(); // second method
spred = [...array3, ...arrayConct3]; // thirod method

// 4. Count the total number of odd numbers in the array
let arrayOdd4 = [1, 23, 4, 5, 6, 7, 8, 5];

countOdd = arrayOdd4.filter((value) => value % 2 == 1).length;
console.log(countOdd);
let count = 0;
arrayOdd4.forEach((value) => {
  if (value % 2 == 1) {
    ++count;
  }
});
console.log(count);
// 5. Count the total number of even numbers in the array
let arrayOdd5 = [1, 23, 4, 5, 6, 7, 8, 5];
countEven = arrayOdd5.filter((value) => value % 2 == 0).length;
console.log(countEven);
// 6. Create a new Array from existing Array using push function
let array6 = [1, 23, 4, 5, 6, 7, 8, 5];
let newArray = [];
// console.log(newArray.push(array6), newArray.flat());
array6.forEach((value) => newArray.push(value));
console.log(newArray);

// 7. Find the average of the Array
let array7 = [1, 2, 3];
// caunt = 0;
// array7.forEach((value) => {
//   caunt += value;
// });
// averge = caunt / array7.length;
// console.log(averge);
caunt = array7.reduce((a, b) => a + b);
console.log(caunt / array7.length);

// 8. Find the largest word in the Array
let words = ["aaarif", "khan", "hii", "hello", "whatare"];
largestWord = "aaarif"; // mana ki sbse bda
// words.forEach((word) => {
//   if (word.length > largestWord.length) {
//     largestWord = word;
//   }
// });
// console.log("largest word is  ", largestWord);   // frist method
largestWordArray = words.filter((word) => word.length > largestWord.length);
console.log(largestWordArray[0]);

// 9. Create an array of names and sort it using a sort function (do it for practice then we will discuss in the class)
let Names = ["aaarif", "khan", "hii", "hello", "whatare"].sort();
console.log(Names);

// 10. Create an empty Array

// Now perform the below actions

// Push 3 numbers
// Unshift 3 numbers
// Pop 2 numbers
// Push 1 number
// Unshift 1 number
// Shift 2 numbers

let empty = [];
empty.push(1, 2, 3); // [1,2,3]
empty.unshift(4, 5, 6); // [4,5,6,1,2,3]
empty.pop(); //[4,5,6,1,2]
empty.pop(); //[4,5,6,1]
empty.push(7); //[4,5,6,1,7]
empty.unshift(8); //[8,4,5,6,1,7]
empty.shift(); //[4,5,6,1,7]
empty.shift(); //[5,6,1,7]

console.log(empty); //[5,6,1,7]
// Now check the result and match
