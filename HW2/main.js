var a = 3;
var b = 2;


if (a > 0 && b > 0) {
    alert(a - b);
} else {
    if (a < 0 && b < 0) {
        alert(a * b);
    } else {
        alert(a + b);
    }
}

var a = 5;

switch (a) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
    default:
        break;
}

function outputNumbers(a) {
    if (a > 15) return;
    console.log(a);
    outputNumbers(++a);

}
outputNumbers(5);
function addNumbers(a, b) {
    return a + b;
}
function subNumbers(a, b) {
    return a - b;
}
function multNumbers(a, b) {
    return a * b;
}
function devNumbers(a, b) {
    return a / b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addNumbers(arg1, arg2);
        case "-":
            return subNumbers(arg1, arg2);
        case "*":
            return multNumbers(arg1, arg2);
        case "/":
            return devNumbers(arg1, arg2);

        default:
            return NaN;
            break;
    }
}


function power(val, pow) {
    if (pow == 1) return val;
    return val * power(val, --pow);
}

console.log(mathOperation(2, 5, "/"));

console.log(power(2, 2));