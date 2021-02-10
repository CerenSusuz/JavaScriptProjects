var mix = ['Ceren', 'Asya', 'Aybike', 'Chucky', 23, 1997, 'izmir', null, undefined, ['a', 'b', 123]];

let value;

value = mix.length;

// get array item

value = mix[8]; // undefined
value = mix[3]; // Chucky
value = mix[0]; // Ceren
value = mix[9]; // ['a', 'b', 123]
value = mix[9][2]; //123

// set array item

mix[0] = 'Asya';
mix[12] = 12345;

// normaly length of mix array is 9 so set 12.index 10,11 will be empty like that ->
// (13) ["Asya", "Asya", "Aybike", "Chucky", 23, 1997, "izmir", null, undefined, Array(3), empty × 2, 12345]

// when adding new item to end of  array prefer do it like that

mix[mix.length] = 123456789;

// or 

mix.push(125478);

//  when adding new item to begin of  array 

mix.unshift('abcdef');

// when deleting-remove last item to  array 

mix.pop();

// when deleting-remove first item to  array 

mix.shift();

// other methods

value = mix.indexOf("Chucky"); // 3
value = mix.indexOf('hello'); // -1
value = mix.reverse(); // reverse flip
value = mix.sort();

let arr = ['a', 'b', 12, 14, 54, "Chucky"];

value = mix.concat(arr); //array merge

value = mix.splice(2, 0, 'CEREN');
//change item of array index 2

value = mix.splice(3, 2);
//delete 2 item index 3 and 4

// the splice() shows you how to use the JavaScript Array Method to delete existing elements, add new elements, and modify elements in an array. The JavaScript array type, the splice() method, provides a very powerful method that allows you to add new elements to the middle of an array.

let years = [1997, 1998, 2009, 2020];

function over18(year) {
    let age = 2021 - year;
    return age >= 18;
}
value = years.find(over18);

//The find() method returns the value of the first element in an array that pass a test (provided as a function). The find() method executes the function once for each element present in the array: If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values) Otherwise it returns undefined
// Note: find() does not execute the function for empty arrays.
// Note: find() does not change the original array.

function over18(year) {
    let age = 2021 - year;
    return age >= 18;
}
value = years.filter(over18);

// The filter() method creates an array filled with all array elements that pass a test (provided as a function)
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

console.log(mix);
console.log(typeof mix); // object

console.log(value);
console.log(typeof value);