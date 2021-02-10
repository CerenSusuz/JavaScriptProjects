let personProto = {
    calculateAge: function() {
        return (2021 - this.yearOfBirth);
    }
}

let ceren = Object.create(personProto);
ceren.name = 'ceren';
ceren.yearOfBirth = 1997;
ceren.job = 'web developer';

let aybike = Object.create(personProto, {
    name: { value: 'aybike' },
    yearOfBirth: { value: 2004 },
    job: { value: 'free style' }
});

console.log(personProto);