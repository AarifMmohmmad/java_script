### inheritance

* Inheritance in JavaScript refers to the mechanism by which one object can inherit properties and methods from another object.

#### class me inheritance

class inheritance is a way for one class toextend another class. this is done by using extend key word

###### extend keyword

extends keyword JavaScript mein class-based inheritance ko implement karne mein use hota hai.
Jab aap ek class ko dusri class se extend karte hain, toh extend ki gayi class "subclass" ban jaati hai jo properties aur methods ko "superclass" se inherit karti hai.
Yani ki subclass superclass ke characteristics ko apne paas le leti hai.

```javaScript
class animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + " is running");
  }
}

class monkey extends animal {     // class child extend pretans
  eat() {
    console.log(this.name + " is eating");
  }
}

const animals = new animal("shdo");
const animals3 = new monkey("bnder");  // yhe bhi animals ki trh obj bnega

```
#### super keyword  & overrinding
```javaScript
class animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + " is running");
  }
}

class monkey extends animal {
  run() {          /// overrinding this method
    console.log(this.name + " hhhhh");
  }
}

```
```javaScript
Subclass ke methods mein super keyword ka use superclass ke methods ko call karne ke liye hota hai. Isse aap subclass mein additional functionality add karte waqt bhi superclass ke methods ko override nahi karte huye call kar sakte hain.
class animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + " is running");
  }
}

class monkey extends animal {
  run() {       
    super.run(...argument)   /// overrinding this method
    console.log(this.name + " hhhhh");
  }
}

```

#### class cunstrctor me super & overriding
```javaScript


class Animal {
    constructor(name) {
        this.name = name;
    }
}
// jb aap child class me constructor bnate he to aapko us constructor me supr keyword uske argumnet ke sath likhna jruri hota he otherwise aapko error aaygi 
// constructor me overrding krne ke liy super keyword likhna hota he or bad me aap us me overriding kr skte he 
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the constructor of the superclass
        this.breed = breed;
    }
}

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.name); // Output: Buddy
```