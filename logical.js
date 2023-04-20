// 1.use logical operator to find wheather the age of person lies between 10 amd 20
let age = 9;
if (age >= 10 && age <= 20) {
  console.log("your age is lies between 10 to 20");
} else {
  console.log("your age is not satisfied");
}

// 2.Demonstrate the use of switch case in java script..

let age = 12;
switch (age) {
  case 10:
    console.log.apply.log("your age is 10");
    break;
  case 12:
    console.log("ypur age is 12");
}

// 3.write a javascript program to find wheather the number is divisible by 2 or 3 not.
let number = 2;
if (number % 3 == 0 && number % 2 == 0) {
  console.log("Number is divisible by 2 or 3");
} else {
  console.log("Number is not divisible by 2 or 3");
}

// 4.write a javascript program to find whaeather the number is divisible by either 2 or 3 .
let number = 19;
if (number % 2 == 0 || number % 3 == 0) {
  console.log("number is divisible either 2or 3");
} else {
  console.log.log("number is not divisible by 2 or 3");
}

// write a javascript program print "you can drive" or "you cannot drive" base on age is greater than 18 using ternary operator.

let age = 13;
let result = age > 18 ? "you can drive" : "You cannot drive";
console.log(result);
