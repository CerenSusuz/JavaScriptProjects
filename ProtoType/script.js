let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return (2021 - this.yearOfBirth);
}

let personOne = new Person("ceren", 1997, "student");

console.log(personOne.calculateAge());

console.log(personOne.hasOwnProperty("job"));