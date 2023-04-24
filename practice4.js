// create an array of a number and take input from the user to add numbner to the array
let num = [1, 2, 3, 4, 5];
let prom = prompt("Enter a number");
prom = Number.parseInt(prom);
let s = num.push(prom);
alert(num);

// Q2.Keep adding numbers to the array in Q1 until 0 is added to the array.
let num = [1, 2, 3, 4, 5];
let prom;
do {
  prom = prompt("Enter a number");
  prom = Number.parseInt(prom);
  let s = num.push(prom);
} while (prom != 0);
alert("You enter correct");

// Filter for a number dividible by 10 from a given array.
let arr = [12, 2, , 3, 5, 22, 100, 10];
let n = arr.filter((x) => {
  return x % 10 == 0;
});
alert(n);

// Q4.Create an array of squre of given number.
let arr = [12, 2, 3, 5, 22, 100, 10];
let n = arr.map((x) => {
  return x * x;
});
console.log(n);

// Q5Use reduce to calculate factorial of a given number from an array of first n natural numbers
let arr = [1, 2, 3, 4, 5];
let n = arr.reduce((x, x1) => {
  return x * x1;
});
console.log(n);
