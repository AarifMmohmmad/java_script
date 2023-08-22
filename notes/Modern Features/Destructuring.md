### Destructuring Arrays

* What is destructuring
```javaScript


```
 
* Reverse values using destructuring
```javaScript

```
 
* Return two values from function
```javaScript

```
 
* Destructuring of array and  nested array
```javaScript

```
 
* Setting default values in array 
```javaScript

```
 
* Destructuring Objects and Nested Object ,Extract value 
 ```javaScript

```
 

* Different property name and  Default values
```javaScript

```
 

* In Function object  ,Exactly same name ,Computer property name
 ```javaScript

```
 
#### NOTE -- 
```javaScript

let aaray = [1, 2, 3, 4, 5];
let deapcopy = JSON.parse(JSON.stringify(aaray)); // dono me koy bhi sbndh nhi he
let shallowcopy = [...aaray]; // only top level copy huaa top level change to change other vise deep change to dono me change
let copy = aaray; // eska referece copy hoga and value bhi khuch bhi change to dono me change hoga
console.log(array === deapcopy, aaray == shallowcopy, copy == aaray);  // false false true

```