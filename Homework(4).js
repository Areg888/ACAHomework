// Ex. 1

let number = +prompt("Enter a number");

if (number == 0) {
    alert("You have entered 0");
} else {
    if (number < 0) {
        alert(number.toString().length - 1);
    } else {
        alert(number.toString().length);
    }
}

//Ex. 2

let number = prompt("Enter a number");
let q = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] === "9") {
        q = q + 1;
    }
}
alert(q);

//Ex. 3

let number1 = +prompt("Enter first number");
let number2 = +prompt("Enter second number");

for (let i = number1; i <= number2; i++) {
    const log = Math.log2(i);
    if (log % (log - (log % 1)) == 0) {
        alert(i);
    }

}
//Ex. 4



// Ex. 5
let n = +prompt("Enter first number");
let m = +prompt("Enter second number");

if (n >= 1 && n <= 10 && m >= 1 && m <= 10) {
    alert(Math.pow(n, m));
} else {
    alert("no");
}

// var. 2
let n = +prompt("Enter first number");
let m = +prompt("Enter second number");

if (n >= 1 && n <= 10 && m >= 1 && m <= 10) {
    let result = 1;
    for(let i = 0; i < m; i++){
        result = n * result;    
    }
    alert(result);
} else {
    alert("no");
}
