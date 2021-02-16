// write like this

// (function() {
// stuff
// })(parameters);

// or like this

// (function() {
// stuff
// }(parameters));

(function(name) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var today = new Date();

    var msg = `Welcome ${name}, today is a ${days[today.getDay()]}`;

    console.log(msg);
}('Ceren'));