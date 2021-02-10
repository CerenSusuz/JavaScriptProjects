for (let i = 2; i <= 8; i++) {
    console.log(i);
}

for (let i = 0; i <= 8; i++) {
    if (i == 6) {
        console.log('that is my lucky number : ' + i);
        break;
    }
    console.log(i);
}
// 0 1 2 3 4 5 that is my lucky number : 6

for (let i = 0; i <= 8; i++) {
    if (i == 6) {
        console.log('that is my lucky number : ' + i);
        continue;
    }
    console.log(i);
}
// 0 1 2 3 4 5 that is my lucky number : 6 7 8

let i = 0;
while (i <= 8) {
    if (i == 6) {
        console.log('that is my lucky number : ' + i);
        continue;
    }
    console.log(i);
    i++
}


do {
    if (i == 6) {
        console.log('that is my lucky number : ' + i);
        continue;
    }
    console.log(i);
    i++
}
while (i <= 8)

// loops in arrays and objects

let cars = ['mercedes', 'bmw', 'toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(i);
}

//special loops

for (let i in cars) {
    console.log(i);
}

cars.forEach(function(car) {
    console.log(i);
});

let people = [
    { name: 'ceren', age: 24 },
    { name: 'asya', age: 11 }
];

for (let i in people) {
    console.log(`${people[i]}`);
};

people.forEach(function(person) {
    console.log(person.name);
});

//map() returns array
let value = people.map(function(person) {
    return person.name;
})