// Ex.1
let a = +prompt("Give a number");
alert(Math.round(a / 50) * 50);

//Ex. 2
let x = +prompt("Number 1");
let y = +prompt("Number 2");
let z = +prompt("Number 3")

if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
    alert("The sign is +");
} else if (x > 0 && y < 0 && z < 0) {
    alert("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
    alert("The sign is +");
} else if (x == 0 || y == 0 || z == 0) {
    alert("unsigned");
} else {
    alert("The sign is -");
}

//Ex. 3

// First var.
const value = prompt("Give a number:");
const digit = prompt("Give a digit:");
alert(value.includes(digit) ? "Yes" : "No");

// Second var.

const number = prompt("Give a number:");
const digit1 = prompt("Give a digit:");
for (let i = 0; i < number.length; i++) {
    if (number[i] == digit1) {
        alert("Yes");
        break;
    }
}
alert("No");

//Ex. 4
let number = 1596;
let max = 0;
let min = number % 10;

while (number > 0) {
    let digit = number % 10;
    max = digit > max ? digit : max;
    min = digit < min ? digit : min;
    number = Math.floor(number / 10);
}
console.log(max - min);

//Ex. 5
let num = +prompt("Give number:");

if (num == 2) {
    alert(num + " is not a prime number");
} else if (num > 1) {
    for (let i = 2; i <= num; i++) {
        if (i == num) {
            alert(num + " is a prime number");
            break;
        }
        if (num % i == 0) {
            alert(num + " is not a prime number");
            break;
        }
    }
} else {
    alert(num + " is not a prime number");
}
