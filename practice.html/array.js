// An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

//

// const arrry = [1,23,4,5,67,89,]

// // const arryObj = [
// //     {name :"aarif"},{name : "khan"}
// // ]

// const arryObj1 = [name ="aarif",age =17,address="padukall"]

// b = arryObj1.entries()

// for(let value of b){
//     console.log(value);
// }

// ar1 = [1,23]

// console.log(ar1,ar2);

// const arry = [1,2,34,5]
// array =[
//     name="aarif",
//     age=20

// ]
// console.log(array[1]);

// creat array

// const ar1 = [1,2,3,4,5]

// const ar2 = [{hii:"hello"},{hello:"hii"}]
// let obje = {
//     A : "a",
//     B:"b"
// }
// console.log(ar1[0],ar2[0]);
// ar2[0].hii = "aarif khan"
// console.log(obje.A);
// console.log(ar2[0]);

arry = [1, 2, 734, 5, "aa"];
arryObj = [{ hii: "hello" }, { hello: "hii" }];

// 1.concat
//    console.log(arry.concat([1,2]));
//    console.log(arry.concat(1,2));
// console.log(arry);

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//Additional arrays and/or items to add to the end of the array.
// ye do array ko jodta he ye real array me koy change nhi krta he

//2.every
let arry2 = [1, 2, 734, 5];

save = arry2.every((element) => element >= 1);
// console.log(save);
//  The Javascript Array.every() method considers all the elements of an array and then further checks whether all the elements of the array satisfy the given condition (passed by in user) or not that is provided by a method passed to it as the argument.ified test.
// and agr all element pass the sepCondition then retrun true ya false

//3
let arry3 = [1, 2, 734, 5];
let arryObj3 = [{ hii: "hello" }, { hello: "hii" }];

arry3.fill();

//4 some
let arry4 = [1, 2, 734, 5];

save = arry4.some((value) => value > 3);
// console.log(save);

// Determines whether the specified callback function returns true for any element of an array.
// agr koy bhi value true hui to yhe true retrun krga

//5 reduce
let arry5 = [1, 2, 734, 5];

save = arry5.reduce((pres, crunt) => {
  return pres + crunt;
});
// console.log(save);

// A function that accepts up to four arguments. The reduce method calls  the callbackfn function one
//  time for each element in the array.
// prevesvallue --- It is a required parameter and used to specify the initialValue or the previously returned value of the function.
// currentValue: It is a required parameter and is used to specify the value of the current element.

// 6 map

let arry6 = [1, 2, 734, 5];
save = arry6.map((vale) => vale + 1);
// console.log(save,arry6);

//The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and calling function on every element of the array.
// currentValue: It is a required parameter and it holds the value of the current element.
// Return Value: It returns a new array and elements of arrays are the result of the callback function.

//7 flat
let arry7 = [1, 2, [734, [5]]];

save = arry7.flat(1);
// console.log(save , arry7);

// It is used to flatten an array, to reduce the nesting of an array.

// parameters depth: It specifies, how deep the nested array should be flattened. The default value is 1 if no depth value is passed as you guess it is an optional parameter.
// Return value: It returns an array i.e. depth levels flat than the original array, it removes nesting according to the depth levels.

//8 flatMap()
let arry8 = [[1], [2], [3], [4], [5]];

save = arry8.flatMap((element) => element.map((vale) => vale + 1));
// console.log(save);
// The Javascript array flatMap() is an inbuilt method in JavaScript that is used to flatten the input array element into a new array. This method first of all maps every element with the help of a mapping function, then flattens the input array element into a new array.

//  current_value: It is the input array element.

//Return Values: It returns a new array whose elements are the return value of the callback function.

// 9 filter
let arry9 = [1, 2, 734, 5];
save = arry9.filter((element, index) => {
  // console.log(index);
  if (element >= 2) {
    console.log(index, element);
    return index;
  }
});
console.log(save);

// The JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

//callback: This parameter holds the function to be called for each element of the array.
// element: The parameter holds the value of the elements being processed currently.
// index: This parameter is optional, it holds the index of the current element in the array starting from 0.

// ----------------------------------------------------------------------------------------------------------------------------


