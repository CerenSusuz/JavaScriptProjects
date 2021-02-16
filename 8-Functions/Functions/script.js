/* function definiton
function functionName(parameterName,parameterName)
{
    do it this ...
    (if you want to return some variables)
    return value;
}
*/


function calculateAge(yearOfBirth) {
    return 2021 - yearOfBirth;
}

let myAge = calculateAge(1997);
let friendAge = calculateAge(1999);
let sisterAge = calculateAge(2009);

console.log(myAge);
console.log(friendAge);
console.log(sisterAge);

/* function declaration;
The function declaration (function statement) defines a function with the specified parameters.
*/
function calcRectArea(width, height) {
    return width * height;
}

console.log(calcRectArea(5, 6)); // 30

/* function expressions; 
The function keyword can be used to define a function inside an expression.
You can also define functions using the Function constructor and a function declaration.
*/
const getRectArea = function(width, height) {
    return width * height;
};

console.log(getRectArea(3, 4)); // 12

/* Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code. */

const sum = function(a = 0, b = 0) {
    var c = a + b;
    return c;
}

//if no value is sent to the parameter, the defined value is activated.

console.log(sum(10, 20)); // 30
console.log(sum(10)); // a=10 , b=0 so 10

// if more parameters are sent than they should be sent, only the necessary parameters are taken

console.log(sum(10, 20, 40, 50)); // 30

// but if we want to get into the work in excess sent parameters

function sumAll() {
    var total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(10, 20, 30)); // 60
console.log(sumAll(7 + 89 + 5 + 64 + 25 + 32)) // 222