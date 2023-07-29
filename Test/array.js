// 1. Check if the array is sorted in ascending order.

// let array1 = [1, 4, 5, 6, 78, 9];
// let sortedArray = [1, 4, 5, 6, 7, 8].sort((a, b) => a - b);

// if (array1.toString() == sortedArray.toString()) {
//   console.log("array sorted");
// } else {
//   console.log("not sorted");
// }                                     --------------------//frist solution
// function checkarray() {
//   for (let i = 1; i < array1.length; i++) {
//     if (!(array1[i] > array1[i - 1])) {
//       return "array id not sorted";
//     }
//   }
//   return "array sorted";
// }
// console.log(checkarray(array1));

// 2. Check if the array is sorted in descending order.
let array2 = [8, 7, 6, 44];
// let sortedArray2 = [1, 23, 4, 5, 6, 7, 8, 5].sort((a, b) => a + b);

// if (array1.toString() == sortedArray2.toString()) {
//   console.log("array sorted");
// } else {
//   console.log("not sorted");
// }                               //---------frist method

// function checkarray2() {
//   for (let i = 1; i < array2.length; i++) {
//     if (!(array2[i] < array2[i - 1])) {
//       return "array is not sorted";
//     }
//   }
//   return "array sorted";
// }
// console.log(checkarray2(array2));

// 3. Concat two Arrays but without using concat function

// let array3 = [1, 23, 4, 5, 6, 7, 8, 5];
// let arrayConct3 = [1, 23, 4, 5, 6, 7, 8, 5];

// array3.push(arrayConct3);
// array3.flat(); // frist method
// concat = [array3 + arrayConct3].flat(); // second method
// spred = [...array3, ...arrayConct3]; // thirod method

// for (let value of arrayConct3) {
//   array3.push(value);
// }
// console.log(array3);
/*

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

//1. Find value greater than 20 using find function

let arr1 = [1, 2, 3, 5, 61, 5];
save = arr1.find((value) => value >= 20);
console.log(save, 107);

// 2. Find string length greater than 10 using find function
let arr2 = ["hello", "hiii", "aarif mohammad"];
save = arr2.find((value) => value.length > 10);
console.log(save);

// 3. Filter all numbers less than 100
let arr3 = [1, 2, 3, 5, 61, 115];
save = arr3.filter((value) => value < 100);
console.log(save);

// 4. Filter all numbers greater than 50 and multiple of 5
let arr4 = [1, 2, 3, 5, 61, 115];
save = arr3.filter((value) => value < 100 && value % 5 === 0);
console.log(save);

// 5. Filter all words with length > 5 and contains world 'World' in itself for example Hello World, Computer World
let arr5 = ["helloworld", "hiii", "aarif mohammad", "compter"];

savestr = arr5.filter((value) => value.length > 5 && value.includes("world"));
console.log(savestr);

// 6. Calculate sum of all the numbers of array using reduce function
let arr6 = [1, 2, 3, 5, 61, 115];
save = arr6.reduce((pres, cruntv) => pres + cruntv);
console.log(save);

// 7. Calculate total words with length > 5 in an array using reduce and filter function. Dono se krna hai alag alag

let arr7 = ["hello", "hiii", "aarif mohammad", "compter"];

console.log(arr7.filter((value) => value.length > 5).length);

save = arr7.reduce((pres, cru) => {
  if (cru.length > 5) {
    cru = 1;
    return pres + cru;
  } else {
    return pres;
  }
}, 0);
console.log(save);
// 8. Convert any odd number to even number using map function

let arr8 = [1, 2, 3, 5, 61, 115];

save = arr8.map((value) => {
  if (value % 2 == 1) {
    return value + 1;
  } else {
    return value;
  }
});
console.log(save);

// 9. Convert any even number to odd number using map function

let arr9 = [1, 2, 3, 5, 61, 115];

save = arr9.map((value) => {
  if (value % 2 == 0) {
    return value + 1;
  } else {
    return value;
  }
});
console.log(save);

// 10. Check if every number is multiple of 5 or not in the array using every function

let arr10 = [1, 2, 3, 5, 61, 115];
save = arr10.every((value) => value % 5 == 0);
console.log(save);

// 11. Check if any number is multiple of 5 and less than 10 using some function

let arr11 = [1, 2, 3, 5, 61, 115];
save = arr11.some((value) => value % 5 == 0 && value < 10);
console.log(save);
*/

// function array(ar1, ar2) {
//   let concatArray = ar1;
//   for (let value of ar2) {
//     if (!ar1.includes(value)) {
//       concatArray.push(value);
//     }
//   }
//   return concatArray;
// }

// console.log(array([1, 2, 3], [3, 4, 5]));
