function Question(hobby) {
    switch (hobby) {
        case 'car':
            return function(name) {
                console.log(`Hello ${name} Do you have a car?`);
            }
            break;

        case 'book':
            return function(name) {
                console.log(`hello ${name} What is your favorite book?`);
            }
            break;

        case 'software':
            return function(name) {
                console.log(`hello ${name} Do you know any programming language?`);
            }
            break;

        default:
            return function(name) {
                console.log(`Hello, ${name}`);
            }
    }
}

var name = prompt('What is your name?').toLowerCase();
var hobby = prompt("What is your hobby?").toLowerCase();

if (hobby == 'car') {
    var carQuestion = Question('car');
    carQuestion(this.name);
} else if (hobby == 'book') {
    var bookQuestion = Question('book');
    bookQuestion(this.name);
} else if (hobby == 'software') {
    var softwareQuestion = Question('software');
    softwareQuestion(this.name);
} else {
    alert('There is no options like that, try again! OPTIONS(car,book,software)');
}