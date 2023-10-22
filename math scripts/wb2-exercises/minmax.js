let a = 2;
let b = 3;
let c = 5;
var smallest;
if (a <= b && a <= c) {
  smallest = a;
} else if (b <= a && b <= c) {
  smallest = b;
} else {
  smallest = c;
}

var largest;
if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log("The smallest number is: " + smallest);
console.log("The largest number is: " + largest);