var sentence = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, voluptatum! Laborum rem odit aut nulla aliquam vel voluptatum possimus reiciendis.";

var url = "https://github.com/CerenSusuz/JavaScript-Projects/tree/main/DataTypes";

let value;

// value = sentence.length; // 145
// value = sentence.trim().split(' ').length; //20

value = sentence.toLowerCase();
// lorem ipsum dolor, sit amet consectetur adipisicing elit. aut, voluptatum! laborum rem odit aut nulla aliquam vel voluptatum possimus reiciendis.

value = sentence.toUpperCase();
// LOREM IPSUM DOLOR, SIT AMET CONSECTETUR ADIPISICING ELIT. AUT, VOLUPTATUM! LABORUM REM ODIT AUT NULLA ALIQUAM VEL VOLUPTATUM POSSIMUS REICIENDIS.

// value = url.replace(url.substr(0, 8), '');
// github.com/CerenSusuz/JavaScript-Projects/tree/main/DataTypes

// value = url.slice(0, 8);
// https://

// value = url.startsWith('https://'); //true

// value = url.indexOf('.com'); //14
// value = url.includes('.com'); //true 



console.log(value);