let value;
let c = 3;
const a = 10;
const b = 15;
//arithmetic operators

value = a + b;
value = a - b;
value = a / b;
value = a * b;
value = a % b;

value = c++;
//c = 4, value = 3 because first assigns the value of c into value variable then do c+1
value = ++c;
//c = 4, value = 4 because first do c+1 then the value of c into value variable  
value = --c;
value = c--;

//assignment operators
value = a;
value += a;
value -= a;
value *= a;
value /= a;
value %= a;

//comparison operators
value = a == b; // just valu control
value = a === b; //value and type control
vale = a != b;
value = a !== b;
value = a > b;
value = a >= b;

//logical operators
value = (a > b) && (a == c); //and
value = (b >= a) || (c > b); //or
value = !(a > b); //not




// console.log(c)
console.log(value);
console.log(typeof value);