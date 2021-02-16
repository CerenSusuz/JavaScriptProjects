let value;

// local storage

const firstName = localStorage.setItem('firstName', 'Ceren');
const lastName = localStorage.setItem('lastName', 'Susuz');

let hobbies = ['reading book', 'watching movies', 'playing basketball'];

localStorage.setItem('hobbies', JSON.stringify(hobbies));

value = localStorage.getItem('lastName');

localStorage.removeItem('firstName');

localStorage.clear();

console.log(localStorage);
console.log(value);

// session storage

const firstName = sessionStorage.setItem('firstName', 'Asya');
const lastName = sessionStorage.setItem('lastName', 'Susuz');

console.log(sessionStorage);