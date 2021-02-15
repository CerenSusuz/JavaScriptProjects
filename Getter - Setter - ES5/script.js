const person = {
    firstName: 'Ceren',
    lastName: 'Susuz',
    get fullName() {
        return `${this.firstName},${this.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// or we can write like that

Object.defineProperty(person, 'FullName', {
    get function() {
        return `${this.firstName},${this.lastName}`
    },
    set function(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})


Object.defineProperty(person, 'age', {
    value: 25,
    writable: true
        // if NOT wrote like ' writable : true ' with person.age CAN NOT change this value 'value : 25 ' because it just has get situation
})
person.age = 26;

console.log(person.age);
// without 'writable : true result is 25,
// with ' writable : true result is 26