// Ex.1

function sorting(z, x, y) {
    for (let i = 0; i < z.length; i++) {
        if (z[i] % 2 == 0) {
            x.push(z[i]);
        } else {
            y.push(z[i]);
        }
    }
    alert(x);
    alert(y);
}

sorting([1, 2, 3, 4, 5, 6], [], []);

// Ex.2

function anagram(y, x) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].length === y.length) {
            for (let j = 0; j < x[i].length; j++) {
                if (x[i][j] === y[j]) {
                    alert(x[i]);
                    break;
                }
            }
        }
    }
}

anagram("invest", ["bank", "table", "isevtn", "note", "pencil"]);

// Ex. 3

function strings(str1, str2) {
    alert(str1.replaceAll(str2, ""));
}

strings(prompt("Write some text"), prompt("Write key word"));

//Ex. 4

let firstArray = [4, 4];
let lastArray = [];
let count = 0;
let check = false;

for (i = 0; i < firstArray.length; i++) {
    for (j = 0; j < lastArray.length; j++) {
        if (firstArray[i] == lastArray[j]) {
            check = true;
        }
    }
    count++;
    if (count == 1 && check == false) {
        lastArray.push(firstArray[i]);
    }
    check = false;
    count = 0;
}

alert(lastArray);

//Ex. 5

function strings(str1, str2, str3) {
    alert(str1.replaceAll(str2, str3));
}

strings(prompt("Write some text"), prompt("Write any leter"), prompt("Write any symbol"));
