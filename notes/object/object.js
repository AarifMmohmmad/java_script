// let obj = {
//   name: "aarif mohammad",
//   age: 21,
// };

// let object = new Object();
// object.name = "khan";
// console.log(obj, object);

// console.log(obj.name, object["name"]);

// const obj = {
//   name: "aarif mohmmad",
//   prop: 42,
//   age: 23,
// };

// Object.seal(obj);
// Object.freeze(obj);
// obj.age = 123;
// obj.prop = 33;
// delete obj.prop;
// Throws an error in strict mode

// console.log(obj.prop);
// console.log(obj);
// Expected output: 42

// let a = 123;
// let b = a;
// console.log(a, b); // a and b equal
// a = 1234;
// console.log(a, b); // a and b not equal

// let ab = [1, 23, 4, 57];
// let abc = ab;
// console.log(ab, abc); //ab and abc equal
// ab.sort((a, b) => a - b);
// console.log(ab, abc); // ab and abc equal . but line number 5 ke according dono equal nhi hone chahiy

// const obj = {
//   name: "aarif mohmmad",
//   prop: 42,
//   age: 23,
// };
// function hello() {
//   console.log(this.name);
// }
// hello.apply(obj)
// let a = 123;
// let b = a;
// console.log(a, b); // a and b equal
// a = 1234;
// console.log(a, b); // a and b not equal

// let ab = [1, 23, 4, 57];

// console.log(ab.indexOf(1));
// console.log(ab.findIndex((value) => value === 1));
// let abc = ab;
// console.log(ab, abc); //ab and abc equal
// ab.sort((a, b) => a - b);
// console.log(ab, abc); // ab and abc equal . but line number 5 ke according dono equal nhi hone chahiy

// constrctor function
// function hello(what, why, when) {
//   (this.what = what), (this.why = why), (this.when = when);
// }

// let con = new hello("constrctor", "bluePrint", "creatObject");

// Add properties to an  object
// con.use = "class";

// Add a method  to an object
// con.name = function () {
//   return this.what + " " + this.why;
// };

// Adding a Property to a Constructor
// You cannot add a new property to an object constructor the same way you add a new property to an existing object:
// hello.property = "property"; // this is not work
// console.log(con);

// let obj = {
//   name: "aarif khan",
//   age: 14,
//   printname: function () {
//     return this.name;
//   },
//   hii: this, // refer a globle object
// };
// console.log(obj.hii);

// console.log(obj);

// let x = "123";

// Object.prototype.getlength = function () {
//   return this.name;
// };
// console.log(obj.getlength());
// function person(name, age, address) {
//   (this.h = name), (this.j = age), (this.k = address);
// }
// const aarif = new person("hello", "hii", "byy");
// console.log(aarif);

// * In an object method, this refers to the object.
// let object = {
//   name: "aarif khan",
//   age: 14,
//   printname: function () {
//     return this.name; // refere to the object
//   },
//   hii: this, // refer a globle object
// };
// console.log(object.hii);

// * Alone, this refers to the global object.
// console.log(this);
// * In a function, this refers to the global object.
// function THIS() {
  // console.log(this); // refer to the globle object
// }
// * In a function, in strict mode, this is undefined.

// * In an event, this refers to the element that received the event.

// * Methods like call(), apply(), and bind() can refer this to any object.



