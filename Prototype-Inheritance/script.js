let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2021 - this.yearOfBirth;
}

let Teacher = function(name, yearOfBirth, job, subject) {
    Person.call(this, name, yearOfBirth, job)
    this.subject = subject;
}

// inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);

// set Teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    return 'Hello my name is' + this.name;
}

let personOne = new Teacher('ceren', 1997, 'web developer', 'c#');

console.log(personOne);