let a = prompt("What is your age?");
a = Number.parseInt(a);
if (a < 0) {
  alert("This is an invallid age");
} else if (a < 18) {
  alert("Your age is not sufficient to drive");
} else {
  alert("Welcome,You can Drive safely");
}
