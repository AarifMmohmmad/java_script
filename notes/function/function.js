
// sum(3,4)



// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2)
// sum.call(1,5)

// function hello(){
//     console.log(arguments)
//  }
//  hello("hiii","hello",)


//  let x = 10 ;
//  console.log(((num)=>num+5)(x))
//  console.log(x);

//  let y =[1,2,3,4,]
//  console.log(((num)=>num.push(6))(y))
//  console.log(y);


//  clearTimeout()
// 
// CREAT CLOSER

// function closer(){
//     console.log("hiii");
//     id = 1
//     return function hh(){
//         console.log("mno");
//     }
// }

// closer()()
// id =1
// function init(){
//     let name = "aarif"
//     function print(){
//         console.log(name)
//     }
//     name ="khan"
//     return print
// }

// let d = init()
// d()       /// khan 


// call

// let obj1 = {
//     name:"aarif khan",
//     functionCreat : function (re){
//         console.log(this.name,re)
//     }
// }

// obj1.functionCreat()

// obj2 = {
//     name:"khan"
// }


// obj1.functionCreat.call(obj2)
// obj1.functionCreat.call(obj2,"hiii")    // 


// apply


// let obj1 = {
//     name:"aarif khan",
//     functionCreat : function (re){
//         console.log(this.name,re)
//     }
// }

// obj1.functionCreat()

// obj2 = {
//     name:"khan"
// }


// obj1.functionCreat.apply(obj2)
// obj1.functionCreat.apply(obj2,["hiii"])    // 


// let obj1 = {
//     name:"aarif khan 96",
//     functionCreat : function (pr){
//         console.log(this.name,pr)
//     }
// }
// let obj = {
//     name:" khan"
// }
// let calls =obj1.functionCreat.call(obj)    
// let apply = obj1.functionCreat.apply(obj)
// let binds = obj1.functionCreat.bind(obj); 
// binds()

// //retruning value --  call & apply method same and bind method are return new function 

// let calls2 =obj1.functionCreat.call(obj,"mno")    
// let apply2 = obj1.functionCreat.apply(obj,["mno"])
// let binds2 = obj1.functionCreat.bind(obj,"mno"); 
// binds2()

//argument --  call & bind same and apply method are take argument in array

// max method
// array = [1,2,3,45]
// console.log(Math.max.apply("",array))


