var a = 10;
let value;

function abc() {
    return 0;
}

value = window; // global scope

// alert()
alert('Hello User');

// prompt()
value = prompt('Give me a number:');
console.log(value);

// confirm()
value = confirm('Are u sure?');
if (value) {
    console.log('OK');
} else {
    console.log('NOT OK!');
}

// scroll
value = scrollX;
value = scrollY;

// location 
// information of window, url like host, hostname,protocol,port...
value = location;
value = location.href;
value = location.hostname;
value = location.host;
value = location.protocol;
value = location.search;
// value = location.reload(); // refresh

// navigator
value = navigator;

console.log(value);