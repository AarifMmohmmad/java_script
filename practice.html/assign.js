let caunt = 0;
let marks;
let guess;
let number = Math.floor(Math.random() * 100);
console.log(number);
do {
  guess = Number(prompt("given a enter a number "));
  if (guess !== number) {
    caunt = ++caunt;
  } else {
    marks = 100 - caunt;
    document.write("you are guess right number", marks);
    console.log("you are guess right number", marks);
  }
} while (!(guess == number));
