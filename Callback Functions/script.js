var value;

function takeNumbers(a, b, c, d, e, callback) {
    let arr = [];
    if (callback && typeof callback === 'function') {
        for (let i = 0; i < 5; i++) {
            arr[i] = callback(arguments[i]);
        }
    }
    return arr;
}

function addTwo(x) {
    return x + 2;
}

function multipleByTwo(x) {
    return x * 2;
}

value = takeNumbers(2, 3, 4, 5, 6, multipleByTwo);
console.log(value);