## constrctor

Constructor is nothing but a function and with help of a new keyword, the constructor function allows to create of multiple objects of the same flavor as shown below:
A constructor is a special function that creates and initializes an object instance of a class.

About constrctor - name constructor functions with an upper-case first letter.

About this key word in constrctor - In a constructor function this does not have a value.
this jis function ya object me hoti he to ,this us object ko represent krgi

#### How to creat a constrctor object

- Constructor function for Person objects
  function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  }

- Create two Person objects
  hm constrctor ki madd se hm object bnay

const myFather = new Person("John", "Doe");
const myMother = new Person("Sally", "Rally");

- Add properties to an object

con.age = "40";

- Add a method to an object

con.name = function () {
return this.name + " " + this.age;
};

- Adding a Property to a Constructor
  note - You cannot add a new property to an object constructor the same way you add a new property to an existing object:
  hello.property = "property"; // this is not work
  console.log(con);

##### bulit in javaScript constrctor

new String() // A new String object
new Number() // A new Number object
new Boolean() // A new Boolean object
new Object() // A new Object object
new Array() // A new Array object
new RegExp() // A new RegExp object
new Function() // A new Function object
new Date() // A new Date object
