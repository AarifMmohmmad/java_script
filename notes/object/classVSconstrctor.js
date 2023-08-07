// constrctor
// function person(name, age, run) {
//   (this.name = name), (this.age = age);
//   //   (this.run = run);
// }

// const aarif = new person("khan", 4567);
// console.log(aarif);

// class
class persons {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  submit() {
    console.log("submit", this.name);
  }
  cancal() {
    console.log("cansal", this.name);
    this.name = "llll";
  }
}
const aarif2 = new persons("khan", 33); // hr bar hmara constructor call hoga   // automticly new keyword ke sath me
console.log(aarif2);
aarif2.submit();
aarif2.submit();

// object
// const aarif3 = {
//   name: "aarif",
//   age: 123,
// };

// console.log(aarif3);
