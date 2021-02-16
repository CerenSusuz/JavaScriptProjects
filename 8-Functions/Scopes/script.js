// global scope - local scope

var firstName = 'Ceren';
var age = 25;

function logName() {
    var firstName = 'Asya';
    var age = 24;
    console.log('function block scope', firstName, age);
    // function block scope Asya 24
}

console.log(age);
// 25

if (true) {
    var age = '23';
    console.log('if block scope', firstName, age);
    // if block scope Ceren 23
}

logName(); // function block scope
console.log(firstName); // Ceren
console.log(age); // 23 
// because blocks do not create their own scope. 23 came from in the if()

console.log('----------------------------------');

if (true) {
    var model = 'Mercedes';
    let year = 2021;
    var color = 'red';
    console.log(model, year, color);
}

console.log(model); // ok
// console.log(year); // not defined
// console.log(color); // not defined

// ES6 -> let and const can create their own scope
// so the variable created with 'var' is reached outside its own scope.
// the variable created with 'let' or 'const' is NOT reached outside its own scope.

console.log('-------------');

var i = 1;
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 5
}
console.log(i); // 5

console.log('-------------');

var i = 1;
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}
console.log(i); // 1