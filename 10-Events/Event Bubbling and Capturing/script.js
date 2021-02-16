// bubbling
const form = documet.querySelector('form');
const cardBoy = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

form.addEventListener('click', function(e) {
    console.log('form');
    // prevent to bubbling
    e.stopPropagation();
});
form.addEventListener('click', function(e) {
    console.log('cardBody');
    e.stopPropagation();
});
form.addEventListener('click', function(e) {
    console.log('card');
    e.stopPropagation();
});
form.addEventListener('click', function(e) {
    console.log('container');
    e.stopPropagation();
});

// if not prevent bubbling when click the form - > form,card body, card, container

// capturing

form.addEventListener('click', function(e) {
    console.log('form');
}, true);
form.addEventListener('click', function(e) {
    console.log('cardBody');
}, true);
form.addEventListener('click', function(e) {
    console.log('card');
}, true);
form.addEventListener('click', function(e) {
    console.log('container');
}, true);