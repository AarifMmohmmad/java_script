### map

A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.


```
NOTE-- yhe object ki trhe hi he lkin khuch alg he jse
Maps have methods for getting the size, checking if a key exists, adding and removing elements, and more.
```

* Creating new map
```javaScript

To create a new map in JavaScript, you can use the Map constructor function. Here's an example:

const map = new Map()

------
const myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);
```
* Adding value in map
```javaScript
const map = new Map()
map.add(key,value)
map.add(1,123)
map.add("a","abc")
```

* Chaining in map
```javaScript


```

* .get function
```javaScript
map.get(key)  
// retrun a value agr value nhi to retrun a false
```

* .has function
```javaScript
map.has(key)  
//  retrun a true agr value nhi to retrun a false

```

* .size function
```javaScript
map.size
// retrun a number of key in map 
```

* .clear function
```javaScript
map.clear()
// clear a map 
```

* Array as key
```javaScript

const myMap = new Map();

const myArray = [1, 2, 3];

myMap.set(myArray, "Hello World!");
myMap.set([1, 2, 3], "Hello World!");

console.log(myMap.get(myArray)); // Output: "Hello World!"
console.log(myMap.get([1, 2, 3])); //  undifiend   // yhe alg array he kyuki [1, 2, 3] == [1, 2, 3] brabr nhi he yhe alg alg he enka refrence bhi alg he 


```

* Iteration of Map
```javaScript
In JavaScript, iteration of Map can be done using methods like `forEach`, `for...of` or `entries`.


const map = new Map();

map.set(1, 4122); 
map.set(2, 1422);
map.set(3, 1224);
map.set(4, 1242);


console.log(map.entries(), map.keys(), map.values());

output 
[Map Entries] { [ 1, 4122 ], [ 2, 1422 ], [ 3, 1224 ], [ 4, 1242 ] } 
[Map Iterator] { 1, 2, 3, 4 }
 [Map Iterator] { 4122, 1422, 1224, 1242 }
```

*  Map to array  array to map
```javaScript

let array = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
const map = new Map([...array]);   // convert array to map 

const arrays = [...map]     /// convert map to array
const myArray = Array.from(myMap);
```

* Object to map  && map to object
```javaScript

const map = new Map();

map.set(1, 4122);map.set(2, 1422);map.set(3, 1224);map.set(4, 1242);


obj = {};
map.forEach((value, key) => {
  obj[key] = value;                     // maps to converd object 
});

console.log(obj);  // converted object 
Object.entries(obj)     // yhe hme object ki key value pair ko ak array me convert krke deta he  ak array ke sath me 
obmm = new Map(Object.entries(obj));    // convert object to map
console.log(obmm);        // converted map

```

* forEach function on map
```javaScript

map.forEach((value, key) => {
  console.log(value, key);
});
```