const set = new Set();

set.add("A");
set.add("b");
set.add("A");
set.add("c");
set.add([1, 2, 3]);
set.add([1, 2, 3]);

// console.log(set.forEach((value) => console.log(value)));
// let hello = [1, 2, 3].forEach((value) => console.log(value));
// console.log("ww", hello);
// console.log(set.size);
// // console.log(set.clear());
// // console.log(set.delete("A"));
// console.log(set.has("A"));
// console.log(set);
// for (let value of set) {
//   console.log(value);
// }
// set.forEach((element) => {
//   console.log(element);
// });

// // conver array
// let arr = [...set];
// console.log(arr);

// let array = [1, 23, 3, 4566];
// let array2 = array;

// array2.push(3);
// console.log(array, array2);

// let array3 = [array].flat();

// array3.push(3);
// console.log(array, array2, array3);

// let array1 = [1, 23, 3, 4566];
// let array2 = [1, 23, 3, 4566];
// let array3 = [1, 23, 3, 4566];

// console.log([...array1, ...array2, ...array3]);
// console.log([array1, array2, array3].flat());
// console.log(array1.concat(array2).concat(array3));

const map = new Map();

map.set(1, 4122); // add value in map
map.set(2, 1422);
map.set(3, 1224);
map.set(4, 1242);

// console.log(map);
// console.log([...map]);
const myMap = new Map();

const myArray = [1, 2, 3];

myMap.set(myArray, "Hello World!");
myMap.set([1, 2, 3], "Hello World!");

// console.log(myMap.get(myArray)); // Output: "Hello World!"
// console.log(myMap.get([1, 2, 3])); //  undifiend

// console.log(map.entries(), map.keys(), map.values());
// obj = {};
// map.forEach((value, key) => {
//   obj[key] = value;
// });
// console.log(obj);
// console.log(Object.entries(obj));
// obmm = new Map([...Object.entries(obj)]);
// console.log(obmm);
// let array = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ];
// const mm = new Map([...array]);
// console.log(mm);
// console.log(map.get(3)); // value deni he
// console.log(map.get(1)); // value duplicate ho skti he lkin key kbhi bhi duplicate nhi hoti he
// map.set(1, 123); // override a
// console.log(map.get(1));
// console.log(map.size); // print a size in key
// console.log(map.has(123)); // retrun a bollen check a key in map
// map.set(123);

// console.log(map);

// array to map   maps khuch asa hota ak bda array or usme chote chote aaray
// let array = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ];
// let maps = new Map(array);
// console.log(maps);
// // map to array
// let map = new Map(maps);
// console.log([...map]);

// map.forEach((value, key) => {
//   console.log(value, key);
// });
//  map to object

// let obj = {};
// map.forEach((value, key) => {
//   obj[key] = value;
// });
// console.log(obj);

// const maps = new Map();
// maps.set([1, 23, 4], "hello");
// console.log(maps.get("[1, 23, 4]"));
// console.log(maps);
// let obj = { 1: 4122, 2: 1422, 3: 1224, true: 1242 };
// console.log(obj);
