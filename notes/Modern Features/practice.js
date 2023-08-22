const array = [1, 2, 5, 3, [4, 5], 6, 7, 8];
// destrucring  arrray
// const [one, two, three] = array;
// console.log(one, two, three);

// const [, , , , , , seven] = array;
// console.log(seven);

// let array2 = array; // copy array

// array2.push(100); //kyuki dono object change dono aaray
// array.shift(); //kyuki dono object  change dono array
// console.log(array, array2); //are same

// shallow copy  top level element me koy change nhi hota he lkin nested me hota he
// deap copy     khi bhi change kro change nhi hota he

// array2 = [...array]; // shallow copy

// array2.push(100); /// only one change copy shalow ony aary to me change
// array2[4].push(900); // dono me change hota he
// console.log(array2, array);

// deap copy --- khi bhi change khuch bhi kro khuch change nhi hota he
// let hii = [1, 2, 3, 4, 5];
// let [one = 50, two = 150, , , , five = 200] = hii;
// console.log(one, two, five);
// // console.log(hii);
// //  [yes + 123] = "hello"

// let mno = hii ? hii : 123;
// console.log(mno);

let aaray = [1, 2, 3, 4, 5];
let deapcopy = JSON.parse(JSON.stringify(aaray)); // dono me koy bhi sbndh nhi he
let shallowcopy = [...aaray]; // only top level copy huaa top level change to change other vise deep change to dono me change
// let copy = aaray; // eska referece copy hoga and value bhi khuch bhi change to dono me change hoga
// console.log(array === deapcopy, aaray == shallowcopy, copy == aaray); // false false true

// defalut value in array
let aaray1 = [1, 2, 3, 4, 5];
let [one, two, three, , , , , eight = 8] = aaray1;
// console.log(one, two, eight); // set defat value agr array me eight nhi to hm denge

// concat aarya with spred opreter
let con1 = [1, 2, 3];
let con2 = [4, 5];
concat = [...con1, ...con2]; // dono array jud jaynge
// console.log(concat);

//reverse value with spred opreter
let a = 10,
  b = 20;
[b, a] = [a, b];

// console.log(a, b);

// retrun multipl values in function

function name(params) {
  return [1, 2, 3]; // array ki madad se hm multipl value retrun kr skte he
}
// console.log(name());

// desructuring in object

let obj = {
  studentname: "aarif khan ",
  age: 12,
  school: 12,
  father: "sher mohammad ",
};

let { studentname, age, helo } = obj; // jo value us object me hogi vo us veriable me stoer ho jaygi jis ka nam hmne diya he
// console.log(studentname, age, helo);

// option name i

let { studentname: hh, age: hii } = obj; // jo value us object me hogi vo us veriable me stoer ho jaygi jis ka nam hmne diya he
// console.log(hh, hii); // collan llga kr hm unke name change kr skte he aliyas krke

// function object destructuring

function ons({ studentname }) {
  // es prkar hm functon call me oobj pass krke bhi des. kr skte he
  // console.log(studentname);
}
ons(obj);

// spered opreter
let str = "string to array with spered operators";
// console.log([...str]);

function name(...arr) {
  // console.log(arr);
}

arrays = [1, 2, 34, 5, 667];
name(1, 2, 34, 5, 667);

// reset opretor

let m = [1, 2, 34, 5, 667];
let [p, q, r, ...other] = m; // save given verible value and baki save other verbile
// console.log(p, q, r, other);

// asa hi object me hota he

let { studentname: n, age: s, ...othersobj } = obj;
// console.log(n, s, othersobj); // save others

function nano(a, b, c) {
  console.log(a, b, c); // save value in veriable
}

// nano(...array); //  array to rest values

let objs = {
  studentname: "aarif khan ",
  age: 12,
  school: 12,
  ["father" + "hello"]: "sher mohammad ", // comput property name
};

// console.log(objs);

// function in object

let obj2 = {
  studentname: "aarif khan ",
  age: 12,
  school: 12,
  father: "sher mohammad ",
  sum() {
    // hm sidha hi ase likh skte without kisi verable me store kray bine
    console.log(this, studentname);
  },
};
// obj2.sum();

// sort sercting in js

console.log(1 || 2 || 0 || 89); // find a true and retrun true other vise retrun last element

console.log(1 && 2 && 0 && 89); // find a false and retrun false other vise retrun last element

console.log(null ?? null ?? false ?? 89); // find a true retrun and retrun true other vise retrun last element   //
// and special ignore a null and undifind he 0 false  value are in a true in case

// asign a value with ternri opertor

a = 0 ? 1 : 2; // yha a ki vlue 1 hogi

// optional chaining

let obj3 = {
  studentname: "aarif khan ",
  age: 12,
  school: 12,
  father: "sher mohammad ",
  address: {
    city: {
      village: "padu kallan",
      thsil: "riya bdi ",
    },
    nma: "aa",
  },
};

console.log(
  obj3.address.city.village, //city: {village: "padu kallan",thsil: "riya bdi ",}
  obj3.address.city.kksks // undifind
  // obj3.address.city.kksks.hhhh // error
);
console.log(
  obj3?.address?.city?.kksks?.hhhh // error solution
);
