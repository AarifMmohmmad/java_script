#### class

Classes are a template for creating objects.

Use the keyword class to create a class.

Always add a method named constructor():

```javaScript
class persons {
     constructor(name, age) {      // constructor   yhe hmara object craet krta he
    (this.name = name), (this.age = age);
  }

  details(name, age) {                        // methods
    (this.name = name), (this.age = age);    // value resign krta he ye method jb tk ese call nhi krnge ye nhi chlega
  }             // class ke method hm (, )spreted nhi dete he

  submit() {                      // methods
    alert("heelo");
  }
}
const aarif2 = new persons("hello",123);    // creat object
                                            // hr bar hmara constructor call hoga  or object creat krga
                                            // automticly new keyword ke sath me
aarif2.details("khans", 456);    // add value
console.log(aarif2);
aarif2.submit();             // call methods
```
