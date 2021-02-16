// Object Literal
// let personOne = {
//     name: "ceren",
//     yearOfBirth: 1997,
//     job: "student"
// }

// function Person(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.CalculateAge = function() {
//         return 2021 - this.yearOfBirth;
//     }
// }

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.CalculateAge = function() {
        return 2021 - this.yearOfBirth;
    }
}

let personOne = new Person("ceren", 1997, "student");

console.log(personOne.name);
console.log(personOne.yearOfBirth);
console.log(personOne.job);
console.log(personOne.CalculateAge());