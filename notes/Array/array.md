## Array

- What is an Array -- array is a data Structure ,that colection of some items
  Need of Array -- to store more than one value
  example - you can put more than one object in a single array ,
  some numbers , some bollens , some name

###### note - array are object , jiska type of object hi hota he jo ak Non-primitive Data types

- How to create an Array -- []
- Array Literal -- []
- Array Object -- new Array()
- Index in Array -- Any value has an index with the help of which we can access it which we write like this arrayNmae[number]
- Array length property --- Returns the number of values in an array. /
  -- This number are one higher than the highest index in the array.

###### NOTE --

     * aap index ki madad se kisi bhi value ko nikal skte he
     example arrayName[index]              // you get a value in this index
     * changing a value in prticuler index
     example  arrayName[index]  = value    // value are update

# Array functions

#### at

The at() method takes an integer value and returns the item at that index, allowing for positive and
negative integers. Negative integers count back from the last item in the array.

let array = [1, 23, 34];
console.log(array.at(2)); // 23

#### indexof

```
let arrays = [1, 23, 34];
console.log(arrays.indexOf(1));
```

#### inculdes

```
let arrays1 = [1, 23, 34];
console.log(arrays1.includes(1));
```

#### sort

```
// sort -- ye array ko sort krta he alphabticy /. This method mutates the array and returns a reference to the same array. // ye number ko string manke sort krga

let arraySort = [9, 0, 10, 8, 87, 7];

// console.log(arraySort.sort());
// console.log(arraySort);

// Function used to determine the order of the elements. It is expected to return a negative value
// if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
// If omitted, the elements are sorted in ascending, ASCII character order.
// Sorts an array in place. This method mutates the array and returns a reference to the same array.
function comper(a, b) {
return b - a; // b-a == desending order and a-b == acending order
}
sort = arraySort.sort(comper);
console.log(sort);
```

#### push

```
// push  -- add a new element in last index and  update original array    .  push retrun the new array length . this

retrun = array.push(2);
console.log(retrun); // length in array

```

#### pop

```
// pop  -- remove last element and update original array       . poped retrn the poped element

reten = array.pop();
console.log(reten); // poped element
```

#### unshift

```
// unshift

retrun = array.unshift(23);
console.log(retrun); // retrun length

```

#### shift

```
// shift - modify orginal aray remove frist element

retrun = array.shift();
console.log(retrun); // poped elemnt

```

#### toString

```
//  tostring
console.log(array.toString()); // array converd to string
```

#### join

```
 join all the array element using a spereter . jiska type of ak string hoga

console.log(array.join("-")); // 1-23-34
console.log(array.join("")); // 12334
console.log(array.join()); // 1,23,34
```

#### concat

```

// concet    -- ak se jyada arry ko jodne ke liy hm use krte he  / retrun a new array not chnge a exicting array  / ak se jyada array bhi de skte he
let array3 = [1, 23, 34];
let array4 = [9, 0, 0, 8, 8, 7];

a = array3.concat(array4);
console.log(a); // [1, 23, 34, 9, 0, 0,  8,  8, 7]

```

#### splice --

```
// spilce  --- splice can be used to add new items to any array

let c = [1, 2, 34, 5, 6, 7];

ret = c.splice(1, 1); // original array ko modifiy krta he
console.log(ret); // retrun krata jo elemet htaya he
console.log(c);

```

#### slice

```

// slice   slice out a pice from an array , / it creat a new array

let d = [12, 3, 4, 5];

r = d.slice(1, 2); //Returns a copy of a section of an array.
console.log(d.slice(1)); // sec prometer ye last element tk lega
console.log(r);
console.log(d);

console.log(d.slice(-2)); // given negtive index
console.log(d.slice(3, 2)); // not sported


```

#### reverse

```
// reverc arrray -- yhe hmare array ko reverse kr deta he / ye orginal array ko chenge krta he

let b = [1, 23, 4, 5];
console.log(b.reverse(), "69");
console.log(b);

```

### delet

```
// delet  --- yhe ak opreter he jo ki kisi element ko delet krta he   // ese hmari aaray ki length pr koy asr nhi hota he

array2 = [9, 0, 0, 8, 8, 7];
delete array2[2];
console.log(array2); //[ 9, 0, <1 empty item>, 8, 8, 7 ]

```

#### every

```

let e = [12, 3, 4, 5];
//every -- checks if all elements in an array satisfy a specific condition. It returns a Boolean value

save = e.every((valul) => valul > 2);
console.log(save);
```

#### some

```

check if at least one element in the array satisfies a specific condition. It returns a Boolean value
save = e.some((valul) => valul < 2);
console.log(save);
```

#### find

```

search for an element in array based on a specific condition. It returns the first element in the array that satisfies the given condition.
let ar = [12, 3, 4, 5];
console.log(ar.find((value) => value % 2 == 0));
```

#### flat

```

Returns a new array with all sub-array elements concatenated into it recursively up to the pecified depth.
let f = [12, 3, 4, 5];
console.log(f.flat(1)); // one depth clear
console.log(f.flat(Infinity)); // all depth clear
```

#### map

```

Creates a new array by applying a specified function to each element of the original array

array = [1,2,34,6]
console.log(array.map((value)=>value+2))
```

#### flatmap

```

Calls a defined callback function on each element of an array. Then, flattens the result
// into a new array. This is identical to a map followed by flat with depth 1.
let g = [12, 3, 4, 5];
console.log(g.flatMap((value) => [value + 1]));
```

#### filter

```

// create a new array containing elements from the original array that satisfy a specific condition

array = [1.235,6,6,789,0]
console.log(array.filter((value)=>value %2 ==0))
```

#### reduce

```
perform a cumulative operation on the elements of array, resulting in a single value.

save = g.reduce((pres, crunt) => pres + crunt);
console.log(save);
```

## lopes in array

#### for

for(let i = 0;i<array.length;i++){
console.log(array[i]) // print all array element
}

#### for of

for(let value of array){
console.log(value) // print all array element
}

#### for in

for(let value in array){
console.log(value) // print all array element's index
}

#### foreach

array ak prtyk element ke liy ak function call krega
array.foreach((value,index)=>{
console.log(value , index)
})

#### defrence between slice and splice

slice returns a piece of the array but it doesn't affect the original array.
splice changes the original array by removing, replacing, or adding values and returns the affected values.
