// Ex. 1
let a = 467;
let b = 460;

if (a % 2 == 1) {
  console.log("Odd")
} else {
  console.log("even")
}

if (b % 2 == 1) {
  console.log("Odd")
} else {
  console.log("even")
}

// Ex. 2

let c = 5488;
let lastDigit = c % 10;

if (lastDigit !== 0) {
  console.log(+(lastDigit.toString() + ((c - lastDigit) / 10)));
} else {
  console.log(c);
}

// Ex. 3 
let first = 12;
let second = 56;
let third = 0;
let foourth = 44;
let fifth = -16;

alert((first + second + third + fourth + fifth) / 5);

// Ex. 4
x = 50;
y = 24;
z = 69;

let min = x,
  mid = y,
  max = z;

if (x < y && z < y) {
  mid = z;
  max = y;
} else if (y < x && x < z) {
  min = y;
  mid = x;
} else if (y < x && z < x) {
  min = z;
  mid = y;
  max = x;
} else if (z < x && x < y) {
  min = z;
  mid = x;
  max = y;
}
console.log(min, mid, max);

// Ex. 5
let n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
        i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
        j += 1;
}