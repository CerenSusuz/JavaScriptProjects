function getTotal(a, b, c) {
    return a + b + c;
}
console.log(getTotal(1, 2, 3));

let numbers = [12, 23, 34];

// ES5
getTotal.apply(null, numbers);

//ES6
getTotal(...numbers);