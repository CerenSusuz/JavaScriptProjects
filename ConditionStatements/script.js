// if-else statement
const firstName = 'ceren';
const age = 23;
const isStudent = false;

if (firstName === 'ceren') {
    console.log(`Hello ${firstName}`)
}

if (age === 23) {
    console.log(`Your age ${age}`)
}

if (isStudent) {
    console.log('You are student')
} else {
    console.log('You are not student')
}

// switch-case statement

var category = 'computer';

switch (category) {
    case 'phone':
        console.log('Phone');
        break;
    case 'computer':
        console.log('Computer');
        break;
    default:
        console.log('NOT IN HERE')
}


let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);