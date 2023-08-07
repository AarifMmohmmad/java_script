class animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(this.name + " is running");
  }
}

class monkey extends animal {
  eat() {
    console.log(this.name + " is eating");
  }
  run() {
    console.log(this.name + " hhhhh");
  }
}

const animals = new animal("shdo");
const animals2 = new animal("doll");
const animals3 = new monkey("bnder");

console.log(animals, animals2, animals3);

animals2.run();
animals3.eat();
// animals2.eat();
animals3.run();
