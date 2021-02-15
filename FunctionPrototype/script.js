// call, apply, bind

var welcome = function() {
    console.log(`Welcome ${this.name}`);
}

var ceren = { name: 'Ceren' };
var asya = { name: 'Asya' };

// if function NOT take parameter call and apply method do same thing, take object

welcome.call(ceren); // Welcome Ceren
welcome.call(asya); // Welcome Asya 

welcome.apply(ceren); // Welcome Ceren
welcome.apply(asya); // Welcome Asya

// bind returns function
welcomeCeren = welcome.bind(ceren);
welcomeCeren(); // Welcome Ceren
welcomeAsya = welcome.bind(asya);
welcomeAsya(); // Welcome Asya

// call - apply difference 

var welcomeTo = function(a, b) {
    console.log(`Welcome ${this.name} Are you interested in ${a} or ${b}`);
}

welcomeTo.call(ceren, 'asp.net', 'angular');
// Welcome Ceren Are you interested in asp.net or angular
welcomeTo.apply(asya, ['asp.net', 'angular']);
// Welcome Asya Are you interested in asp.net or angular
welcomeCeren = welcomeTo.bind(ceren);
welcomeCeren('php', 'asp.net');
// Welcome Ceren Are you interested in php or asp.net
welcomeAsya = welcomeTo.bind(asya);
welcomeAsya('python', 'c#');
// Welcome Ceren Are you interested in php or asp.net