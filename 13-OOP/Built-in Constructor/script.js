// String
var strOne = 'Ceren'; // string
var strTwo = new String('Ceren'); // string object

if (strOne === 'Ceren') {
    console.log('yes');
} else {
    console.log('no');
}
// returns yes

if (strTwo === 'Ceren') {
    console.log('yes');
} else {
    console.log('no');
}
// returns no

String.prototype.repeat = function(n) {
    return new Array(n + 2).join(this);
}
console.log('ceren'.repeat(2));

// Numbers
var numOne = 12;
var numTwo = new Number(12);

// Boolean
var boolOne = true;
var boolTwo = new Boolean(true);

// Object 
var objOne = {
    name: 'Ceren'
}
var onjTwo = new Object({
    name: 'Ceren'
});

// Array
var arrOne = ['a', 'b', 'c'];
var arrTwo = new Array('a', 'b', 'c');

Array.prototype.remove = Array.prototype.remove || function(member) {
    var index = this.indexOf(member);
    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
}

console.log(arrOne.remove('c'));