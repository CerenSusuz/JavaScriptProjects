let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function() {
    return 2021 - this.yearOfBirth;
}

let Teacher = function(subject) {
    Person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}