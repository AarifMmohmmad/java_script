// let concat = [1, 2, 34, 5];
// let concat2 = [1, 2, 34, 5];
// let concat3 = [1, 2, 34, 5];

// console.log([...concat3, ...concat, ...concat2]);

// function passnum(a,b,c,d,e){
//   console.log(a);
// }

let obj = {
  name: "aarif mohammad",
  age: 123,
  class: 12,
  address: {
    village: "jaipur",
    pincode: 11111123,
  },
};

let { name: nann = "hii", age = 12, address: { pincode } = 12345 } = obj;

console.log(nann, age, pincode);
