const firstName = "Ceren";
const lastName = 'Susuz';
const age = 23;
let value;

value = firstName + "-" + lastName;

// value = "I am " + firstName + ' ' + lastName + ". I am " + age + " years old and I want to live in Ireland.";

// I am Ceren Susuz. I am 23 years old and I want to live in Ireland.

// value = firstName.concat(' ', lastName); // Ceren Susuz

// value = value.length; // 11
// value = value.toUpperCase(); // CEREN SUSUZ
// value = value.toLowerCase(); // ceren susuz

// value = value[1]; //e
// value = value[0]; //C

// value = value.indexOf('r'); //2
// value = value.indexOf('k'); 
// -1 because k is not in the value

// value = value.substring(0, 5); // Ceren (start,end)
// value = value.substring(3, 6); // en
// value = value.slice(0, 5); // Ceren
// value = value.slice(3, 6); // en
// value = value.substring(6); // Susuz (start to the end)

// value = value.replace('Ceren', 'Asya')

// value = value.trim(); // crop from the beginning and end

value = value.split('-');
// (2) ["Ceren", "Susuz"]
// 0: "Ceren"
// 1: "Susuz"
// length: 2
// __proto__: Array(0)
//typeof object

console.log(value);
console.log(typeof value);