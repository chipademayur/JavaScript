let num = [1, 2, 3, 4, 5, 6, 7];
let i;
for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// For Each loop in javascript
num.forEach((Element) => {
  console.log(Element * Element);
});

// for..of
for (let a of num) {
  console.log(a);
}

//for..in loop
for (let a in num) {
  console.log(num[a]);
}
