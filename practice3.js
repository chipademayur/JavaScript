// Q1..Write a program to print the marks of a student in an object using ( for loop/for...in loop)
let marks = {
  Mayur: 50,
  siddhi: 70,
  akshya: 90,
};
// This example is solve by using for loop.............
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "Marks of " + Object.keys(marks)[i] + " is" + marks[Object.keys(marks)[i]]
  );
}

// this example is solve by for..in loop is use............
for (let a in marks) {
  console.log("marks of" + a + "are" + marks[a]);
}

// Q2.Write a program to print "try...again"until the user enter the corrent number.
let cn = 8;
let i;
while (i != cn) {
  alert("Try....again");
  i = prompt("enter a number");
}
alert("You enter a correct number");

//Q3. write a function to find a mean of 5 number.

function mean(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}
console.log(mean(1, 2, 3, 4, 5));
