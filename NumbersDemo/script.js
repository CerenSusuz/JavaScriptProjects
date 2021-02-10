// var number = 123.46789;

// console.log(number.toPrecision(4)); //123.5
// console.log(number.toFixed(4)) //123.4679
// console.log(Math.round(number)) //123
// console.log(Math.ceil(number)) //124
// console.log(Math.floor(number)); //123
// console.log(Math.min(10, 20, 30, 40, number)) //1
// console.log(Math.max(10, 20, 30, 40, number)) //123.46789

// var min = 10;
// var max = 125;

// console.log(min + Math.random() * max);
// console.log(Math.floor(min + Math.random() * (max - min)));


// To calculate the salary received by the staff according to the overtime.
// gross salary = 4500 TL/$
// gross overtime = 10.5 TL/$
// 1 - What is the total gross salary out of 50 working hours in March?
// 2 - What is the total net salary to be received if the total deduction rate on the gross salary is 15%?

var grossSalary = 4500;
var grossOvertime = 10.5;
var hours = 50;

var totalGrossSalary = grossSalary + (grossOvertime * hours);

var totalSalary = (totalGrossSalary - totalGrossSalary * 0.25);

console.log(totalGrossSalary.toFixed(2), totalSalary.toFixed(2));
//5025.00 TL/$, 3768.75 TL/$