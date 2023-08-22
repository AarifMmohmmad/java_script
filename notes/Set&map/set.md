### set

A javaScript set is a collection of unique value . Each value can only occur once in a Set.
A Set can hold any value of any data type.

* creat set 
  ```javaScript
  const set = new Set()

  <!-- add values in set  -->

  set.add("A");
  set.add("b");
  set.add("A");
  set.add("c");

  ya
  const mySet = new Set([1, 2, 3]);

  ```

* Note: Elements order in Set - jis order me uniq value add ki gy he usi order me element honge     

* Set size  -- yhe set ki size btata he ki esme kitni unqie value he 
```javaScript
  const set = new Set()

    set.size 
// retrun a number 
```

* Set.has -- check krta he ki value h ya nhi 
```javaScript
set.has(value)
// retrun a bollen 
```

* set.clear  --- clear kr deta he hmare set ko khali kr deta he 
```javaScript
  const set = new Set()

    set.clear()  
// retrun khuch nhi krta he  

```
* Set.delete kisi value ko delet kr deta he pramannt or us jgh dusri aa jati he 
```javaScript

set.delete(value)

// retrun a bollen 
```

* Note - Index in set -- set me index suport nhi krti he 

* for loop  && foreach
```javaScript

for (let value of set) {
  console.log(value);
}
set.forEach((element) => {
  console.log(element);
});
```

* convet set to array
```javaScript

let arr = [...set];
console.log(arr);
```

* convert array to set 
```javaScript

let arr = [1,23,4,5,664,4,1,2,3,455,];
const set = new Set(arr)
```