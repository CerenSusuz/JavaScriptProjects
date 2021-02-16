// primitive type
let a = 21;
let b = 22;

console.log(typeof a); // number
console.log(a); // 21
console.log(typeof b); // number
console.log(b); // 22

a = b;

console.log(typeof a); // number
console.log(a); // 22
console.log(typeof b); // number
console.log(b); // 22

b = 12;

console.log(a); // 22
console.log(b); // 12

// we change 'b' but it did NOT effect 'a' .
// because they did NOT have the same address, they have different address in the stack.

// object type
var obj = {
    name: 'Ceren',
    age: 24
}

a = obj;

console.log(typeof a); // object
console.log(a);
// {name: "Ceren", age: 24}
// age: 24
// name: "Ceren"
// __proto__: Object

// then we change variable of obj.name

obj.name = 'Asya';

console.log(typeof a); // object
console.log(a);
// {name: "Asya", age: 24}
// age: 24
// name: "Ceren"
// __proto__: Object

// we change 'obj.name' but it effect 'a' too.
// because they have the same address in heap.


// EXAMPLE

let number = 24;
let person = {
    name: 'Ceren',
    age: 23
}

function update(x, y) {
    x = 25;
    y.age = 26;
}

update(number, person);

console.log(number); // 24
console.log(person); // {name: "Ceren", age: 26}