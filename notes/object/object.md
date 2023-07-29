# Object

#### What is an object

object is a data Structure .It is used to store different types of key collections and complex entities.

note -Objects are the most important data type ,Objects are quite different from JavaScript’s
primitive data types (Number, String, Boolean, null, undefined, and symbol).

#### rules

\*The object is always defined inside the curly brackets { }.

- Objects are written in key pairs.
- The keys must be strings, and their values must be a valid JSON data type.
  The JSON data types can be number, string, object, boolean, array, or null.
- The keys and values are separated by a colon(“:”).
- Each key or value pair is separated by a comma.

#### object properties : key and value

```
object ki do properties hoti he key or value

an object is a collection of key-value pairs.
 The "key" in an object refers to the unique identifier that is used to access its corresponding "value".
```

#### Object creat types

1.  object literal

```
Literals are smaller and simpler ways to define objects. We simply define the property and values inside curly braces as shown below:

let car = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc'
};

question - how we can add more properties to an already defined object:

car.brakesType = 'All Disc';


```

2.  cunstrctor

```
// Simple function
function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
// New keyword to create an object
let car  = new vehicle('GT','BMW','1998cc');
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);
```

3.  Object.creat

```
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
};
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();

```

4. es6

```

```

#### access

note - array me index hoti he or object me anotetaion hota he (dot anotetion and breact anotetation)

two type of access object values

let object = {
name: "aarifmohammad",
age: 87,
};

- dot anotetion

console.log(object.name);

- breact anotetation

console.log(object["name"]);

#### nested -- array function object

```
nested Array ---
     an array inside an object is a way to store multiple values in a single property of an object.
     This property can be accessed using the dot notation or square bracket notation.
    example-  const car = {
                make: "Toyota",
                features: ["red", "2.5L", "automatic"]   // multipal value store
                };
nested object ---
        const car = {
                make: "Toyota",
                features:{color:"red",fuel : "2.5L",}
                };

nested in function ----
    objects can contain functions as properties, which are called "methods". These methods can be accessed and invoked using dot notation.
    example -let car = {
            start: function() {
            console.log('Starting the car...')
              },
           stop: function() {
            console.log('Stopping the car.')
            }
            }
            car.start(); // Output: Starting the car...
```

#### Uses of this in Objecte

#### Refrence of object

## Object methods

1. object.creat()

```

```

2. object.value()

```

```

3. object.keys()

```

```

4. object.entries()

```

```

5. object.asign()

```

```

6. object.frezz && object.frozen

```

```

7. object.seal && object.seled

```

```

#### NOTE -

```
let value = 1
let value2 = 12
value =value2

value is a primitive type (number), and when you assign value =value2,
you are creating a new copy of the value stored in a and assigning it to b.
Both a and b are independent copies, so modifying one does not affect the other.

let value = [1 ,2,34,5,88]
let value2 = value
value is an array, which is a reference type. When you assign value2 = value,
you are not creating a new copy of the array; instead, you are creating a reference to the same array.
This means that value2 and value are essentially pointing to the same array in memory. Therefore,
modifying the array through either variable will affect the same underlying data.
```
