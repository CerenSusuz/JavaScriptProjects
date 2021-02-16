let value;

value = parseInt('123'); //123
value = parseInt('123asd'); //123
value = parseInt('ab1223'); //NaN

isNaN('as1230'); //false
isNaN('1234f'); //true

var number = 123.456789

value = number.toPrecision(5);
//123.46 rounding out the number to the nearest value and it converted to string

//Math.Property
value = Math.PI; // 3.141592653589793
value = Math.round(235.5580); //236
value = Math.ceil(23.458); //24 always rounding up
value = Math.floor(12.658); //12 always rounding down
value = Math.sqrt(144); //square -> 12
value = Math.abs(-4586); //absolute -> 4586
value = Math.pow(2, 8); // 2^8=256
value = Math.min(1, 2, 3, 4, 5, 66, 54, 345, 098, -458); //min num of the arr so -> -458
value = Math.max(78, 45, 587, 5630);
//max num of the arr so ->5630
value = Math.random(); //between 0-1
value = Math.random() * 10; //between 0-9
value = Math.random() * 100 + 1; //between 0-100


console.log(value);
console.log(typeof value);