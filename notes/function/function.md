## Functions

    In JavaScript, a function is a block of reusable code that performs a specific task.
    exuct a function and use .

#### Function declaration

```
function functionName(parameters,...){            function definition
    statment
}
functionName(arguments,...)                     calling a function


note -- parameters me aap defelate parameters bhi le skte he

       function functionName(parameters = defelat,...){            function definition
                statment
       }

note -- function se aap koy bhi value ko return krva skte ho, jha se aap us function ko call        krnge vo us verbile me store ho jayga for example

       function functionName(parameters = defelat,...){            function definition
                statment
                return value
       }

       let a = functionName()


NOTE : jruri nhi ki aap function me parameters likhe .
        you can a call before function definition

```

#### Function expression

```
when We creat a function and asign a variable,known as function exprection

this are frist class function
const functionName = function(){                // anonymous function
    statement
}

you can't a call before function definition
```

#### Arrow function

```
Arrow function function declaration and function expression ka commibination hota he
arrow funncion me function name likhna required nhi he likhne pe error aaygi

   let functionName = (parameters)=> console.log("hii")       anonomous function


   let functionName= (parameters)=>{
    statement
   }


Note -- single line function me return likhne ki jrurt nhi hoti he yhe already single line ko retrun krata he sath hi yha {}crlebracket lgane ki jrurt nhi he


```

##### Difference between function declaration and function expression

```
function declaration --The function in function declaration can be accessed before and after the
        function definition.
        A function declaration must have a function name.
        These are executed before any other code.

function expression  -- The function in function expression can be accessed only after the function
        definition.
        A function expression is similar to a function declaration without the function name.
        Function expressions load and execute only when the program interpreter reaches the line of code.


```

##### Difference between function expression and arrow function

```
A function expression is a way of defining a function in JavaScript using the function keyword

An arrow function, also known as a "fat arrow" function, is a shorthand syntax for defining a function in JavaScript and it uses the "=>" symbol, such as:


note ---
Arrow functions do not have their own this, they use this of the surrounding scope.

Arrow functions do not have their own arguments object, they use arguments object of the surrounding scope.
Arrow functions can't be used as constructors.
Arrow functions can't be used with the new keyword.
Arrow functions can't be used as generators.
In general, arrow functions are shorter and easier to read than function expressions, but they have
 some limitations. It's a matter of preference which one to use, depending on the specific use case.

```

##### Anonymous function

```
jis function me function ka nam nhi hota he use anonymous function khte he
jse ki function expression .

Anonymous functions are often used as arguments for other functions, such as callbacks and event handlers.

For easier programming, anonymous functions allow context scoping. When functions are utilized as data, arrow functions should be used.


short syntex ( () => {
    // Function Body...
} )();
```

## NOTE --

Function invoking/calling

```
kisi bhi function ko call krne ke liy  us function ka  nam likhe or brect lgay
   functionName()
```

Function calling from other function

```
koy bhi any function other function ko tb call krega jb us outer function ke ander koy anyfunction call ka code likha ho example
function outer(){
   iner()
}
function iner(){

}
outer()
```

Function as values

```
functions are first-class citizens, which means they can be treated like any other value, such as a number or a string.
 This means that they can be assigned to variables, passed as arguments to other functions, and returned from functions.


hm kisi bhi function ko variable me store krva skte he or use kisi bhi any function ko as argument pass krte he es prkar hm kisi bhi function ko ak value mante he

function sum(cd){
    cd()
}

sum(()=>console.log("hii"))
```

Arguments and Parameters and Default parameters

```
Arguments --- function ko jb hm call krvate he tb usme hm value pass krte he us value ko hm argument khte he
Parameters -- jb hm function ko defiend krte he tb jo usme khuch parameters lete he us jisme hmari
value jo hm argument me pass krte he vo save ho jati he ese hm as variable bhi kh skte he .

function sum(a,b){              a,b are parameteres
    console.log(a+b)
}
sum(3,4)                        3,4 are arguments

frist value frist frist parameters me save hogi


hm default parameters bhi de skte he agr hmne koy argument pass nhi kiya he to parametres me koy value nhi aaygi or hmne jo defalut parametrs diya he vo chlega

function sum(a=3,b=7){         yha hm default parameters a ,b de rhe he
    console.log(a+b)
}
sum()
```

Arguments Object in functions

```
function me ak key word hota he jo hmare jitne bhi argument hmne pass kiye he vo btata he

function hello(){
   console.log(arguments)
}
hello("hiii","hello",)


[Arguments] { '0': 'hiii', '1': 'hello' }  print all arguments in console in object
```

## More on functions

1. Passing arguments: value vs reference

```
agr hm argument me Primitive data types such as string, number, null, undefined, and boolean, are
passed by value while non-primitive data types such as objects, arrays, and functions are passed by reference ;

ydi hm argument me  value pass krte he to,
jb function hmari value pr agr koy code execute krta he to vhe hmari original value pr koy prbhav nhi pdta he
example -- let x = 10 ;
 console.log(((num)=>num+5)(x))    lkin num =15
 console.log(x);                // x = 10 print


ydi hm argument me reference pass krte he to ,
jb function reference pr code likh kr jb execute krta he to vhe origine array/object me change krata he

 let y =[1,2,3,4,]
 console.log(((num)=>num.push(6))(y))
 console.log(y);

```

2. First Class function/Citizen

```
 all functions are first-class citizens, which means they can be treated like any other value, such as a number or string.
 kyuki -- Assigned to a variable:
         Passed as an argument to another function:
         Returned as a value from a function
```

3. High Order function

```
A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result.

function add(x,y){
    retrun x+y
}

function highorder(fncb,x,y){
    retrun fncb(x,y)call back
}
highorder(2,4)
```

Callback function

```
A call back function is a function passed into a another function as an argument, wicth is then  invoked
inside th outer function   to complete an action.


function hii(cb){
  cb()
}

function hello(){
    console.log("heelo")
}
hii(hello)


```

setTimeOut

```
setTimoutfunction do parameters leta he jisme phla callback function and dusra time
        callBack function setTimeout function ke call krne ke bad jis code ko run krane he use
        callBack function me likhte he and time us call back function ko kitne time bad call krana he
        us time ko likte he

    setTimeout(()=>{
        console.log(run)
    },1000)                         time mili second 1sec = 1000mili sec

---note----- setTimeOut functon ak time pr chl kr vaps ruk jayga yhe ak bar hi run hota he
```

setInterval

```
setInterval function do parameters leta he jisme phla callback function and dusra time
         callBack function setInterval function ke call krne ke bad jis code ko run krane he use
        callBack function me likhte he and time us call back function ko kitne time bad call krana he
        us time ko likte he

        setInterval(()=>{
            console.log("hello")
        },1000)

--note----- setInterval functon ko jo time diya he vhe us time ke bad hr bar call hoga or jo code likha vhe vaps reload hoga yhe hmehsa chlta rhga

setInterval function ak id deta he hmesha khud ki unic us id ki madd se aap ese rok skte he
ak function hota he clearTimeout() jisse rokte he

clearTimeOut(id)
esme uski id likhte he or yhe use rok deta he

```

. Function returning function

```
jb bhi koy function kisi any function ko retrun krta he to vhe high order function khlata he

function highOrder(){
    retrun ()=>{
        retrun a+b
    }
}
funcs = highOrder()
funcs(3,4)

```

###### The call and apply methods && bind

```
call - call method is a predifiend javaScript method
       with call(),an object can use a method beloging to another function
       call method frist argument ak object leta he and secd khuch bhi

Apply -
       apply --- apply method frist prameter ak obj leta he or sec me ak array support krta he


bind  - we can bind an object to a comman function , so that the function gives defference result  when
 its need

example---
let obj1 = {
    name:"aarif khan 96",
    functionCreat : function (pr){
        console.log(this.name,pr)
    }
}
let obj = {
    name:" khan"
}
let calls =obj1.functionCreat.call(obj)
let apply = obj1.functionCreat.apply(obj)
let binds = obj1.functionCreat.bind(obj);
binds()

//retruning value --  call & apply method same and bind method are return new function

let calls2 =obj1.functionCreat.call(obj,"mno")
let apply2 = obj1.functionCreat.apply(obj,["mno"])
let binds2 = obj1.functionCreat.bind(obj,"mno");
binds2()

//argument --  call & bind same and apply method are take argument in array


note- apply
     array = [1,2,3,45,]
    Math.max.aplly(array)
```

Immediately invoked function expression

```
yhe function hatho hath call ho jata he h ese es prkar likha jata he ki bad code pura cmpile hote hi call ho jata he
(function(){ // Code jo immediate  execute hoga })();


```

Closures

```

note --- jb kisi function se koy function retrun  hota he tb us function ke anderr jitne bho verbile decler huv he vhe sb bhi unke refernece ke sathe bhi retrun honge

function init(){
    var name = "aarif"
    function print(){
        console.log(name)
    }
    name ="khan"
    return print
}

let d = init()
d()       /// khan

a closure is a combination of a function and the lexical environment within which that function was declared. The lexical environment consists of any local variables that were in scope at the time the closure was created.

Ek closure tab hota hai jab ek function bahar ke variables aur functions ke references ko lekar apne
andar use karta hai, aur phir wo function ussi state mein rehta hai jis mein usko define kiya gaya tha.
 Yeh bahar ke variables aur functions ke liye private scope create karta hai.


function outerFunction() {
  var outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Outputs: "I am from the outer function"


Closures are commonly used for data encapsulation, private variables, and creating functions with persistent state
```
