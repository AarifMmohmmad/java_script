// Array

const { del } = require("request");

let array = [1, 23, 34];

// 1. tostring
console.log(array.toString()); // array converd to string

// 2 join  -- join all the array element using a spereter . jiska type of ak string hoga

console.log(array.join("-")); // 1-23-34
console.log(array.join("")); // 12334
console.log(array.join()); // 1,23,34

// pop  -- remove last element and update original array       . poped retrn the poped element

reten = array.pop();
console.log(reten); // poped element

// push  -- add a new element in last index and  update original array    .  push retrun the new array length . this

retrun = array.push(2);
console.log(retrun); // length in array

// shift - modify orginal aray remove frist element

retrun = array.shift();
console.log(retrun); // poped elemnt

// unshift

retrun = array.unshift(23);
console.log(retrun); // retrun length

// delet  --- yhe ak opreter he jo ki kisi element ko delet krta he   // ese hmari aaray ki length pr koy asr nhi hota he

array2 = [9, 0, 0, 8, 8, 7];
delete array2[2];
console.log(array2); //[ 9, 0, <1 empty item>, 8, 8, 7 ]

// concet    -- ak se jyada arry ko jodne ke liy hm use krte he  / retrun a new array not chnge a exicting array  / ak se jyada array bhi de skte he
let array3 = [1, 23, 34];
let array4 = [9, 0, 0, 8, 8, 7];

a = array3.concat(array4);
console.log(a); // [1, 23, 34, 9, 0, 0,  8,  8, 7]

// sort  -- ye array ko sort krta he alphabticy /. This method mutates the array and returns a reference to the same array. // ye number ko string manke sort krga

let arraySort = [9, 0, 10, 8, 87, 7];

// console.log(arraySort.sort());
// console.log(arraySort);

// Function used to determine the order of the elements. It is expected to return a negative value
// if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
//  If omitted, the elements are sorted in ascending, ASCII character order.
// Sorts an array in place. This method mutates the array and returns a reference to the same array.
function comper(a, b) {
  return b - a; // b-a  == desending order and a-b == acending order
}
sort = arraySort.sort(comper);
console.log(sort);

// reverc arrray -- yhe hmare array ko reverse kr deta he / ye orginal array ko chenge krta he

let b = [1, 23, 4, 5];
console.log(b.reverse(), "69");
console.log(b);
