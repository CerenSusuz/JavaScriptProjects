// numeric range

var number = {
    min: 0,
    max: 100,
    checkNumericRange: function(value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            return value >= this.min && value <= this.max;
        }
    }
}

console.log(number.checkNumericRange(20));
// true
console.log(number.checkNumericRange(-20));
// false

var number1 = { min: 20, max: 80 };

console.log(number.checkNumericRange.call(number1, 18));
// false

console.log(number.checkNumericRange.apply(number1, [18]));
// false

var checkNumericTest = number.checkNumericRange.bind(number1);
console.log(checkNumericTest(45));
// true