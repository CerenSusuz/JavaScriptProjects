// let person = {
//     firstName: "Ceren",
//     lastName: 'Susuz',
//     age: 24,
//     city: 'İzmir',
//     hobbies: ['developing', 'travelling'],
//     getBirthYear: function() {
//         return 2021 - this.age;
//     }
// };

// let value;

// value = person.age;
// value = person.firstName;
// value = person['firstName'];
// value = person.hobbies[0];
// value = person.getBirthYear();

// console.log(person);
// console.log(typeof person); //object
// console.log(value);

let people = [
    { firstName: 'Ceren', age: 24 },
    { firstName: 'Asya', age: 11 },
    { firstName: 'Aybike', age: 16 }
];

value = people[0];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}

console.log(value);
console.log(people); //array
console.log(typeof people); //object