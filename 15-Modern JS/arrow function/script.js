// examle 1
let welcomeES5 = function() {
    console.log('Hello from ES5');
}
welcomeES5();

let welcomeES6 = () => {
    console.log('Hello from ES6');
}
welcomeES6();

// example 2
let multiplyES5 = function(x, y) {
    return x * y;
}
consoe.log(multiplyES5(5, 15));

let multiplyES6 = (x, y) => {
    return x * y
};
// let multiplyES6 = (x,y) => x*y ;

// example 3
let getProductES5 = function(id, name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5(2, 'iphone'));

let getProductES6 = (id, name) => ({
    id: id,
    name: name
});
console.log(getProductES6(2, 'samsung'));

// example 4
const phones = [
    { name: 'iphone', price: 8000 },
    { name: 'samsung', price: 5000 }
];
let getPricesES5 = phones.map(function(phone) {
    return phone.price;
});
console.log(getPricesES5);

let getPricesES6 = phones.map(phone => phone.price);
console.log(getPricesES6());

// example 5

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 48, 102];

let getEvenES5 = arr.filter(function(a) {
    return a % 2 == 0;
})
console.log(getEvenES5());

let getEvenES6 = arr.filter(a => a % 2 == 0);