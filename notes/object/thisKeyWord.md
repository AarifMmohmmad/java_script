### this keyWord

In JavaScript, the this keyword refers to an object.
The this keyword refers to different objects depending on how it is used:

 * In an object method, this refers to the object.
```javascript
let object = {
  name: "aarif khan",
  age: 14,
  printname: function () {
    return this.name; // refere to the object
  },
  hii: this, // refer a globle object
};
console.log(object.hii);
```

 * Alone, this refers to the global object.
```javascript

console.log(this);
```

 * In a function, this refers to the global object.
```javascript
  
function THIS() {
  console.log(this); // refer to the globle object
}
```

 * In a function, in strict mode, this is undefined.

 * In an event, this refers to the element that received the event.

 * Methods like call(), apply(), and bind() can refer this to any object.


* constrctor me this keyword
```javaScript
function person(names, age, run) {
  (this.name = names),      // yha this.prooertikaname he 
   (this.age = ages);      // this ke sath jo age he vo es object ki properti he 
}

const aarif = new person("khan", 4567);
console.log(aarif); //person { name: 'khan', age: 4567 }
```