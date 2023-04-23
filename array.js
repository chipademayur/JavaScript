// let mayur = [1, 2, 3, 4, false, "Not define"];
// let i;
// for (i = 0; i < mayur.length; i++) {
//   console.log("marks of student is:" + mayur[i]);
// }

// ArrayMethods

// 1.to convert arry to string

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// tostring method in javascript use for convert array to string
let b = num.toString();
console.log(b);

// pop method in javascript pop out last element of array and return that element
let p = num.pop();
console.log(p);

// push method in javascript add element to the end of array
let s = num.push(40);
console.log(num);

// shift method in javascript remove first item of array
let r = num.shift();
console.log(r);

// unshift method in javascript add the element in an array
let u = num.unshift(11);
console.log(u, num);
