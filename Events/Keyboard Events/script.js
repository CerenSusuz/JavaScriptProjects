const input = document.querySelector('#txtTaskMenu');

input.addEventListener('keydown', eventHandler);
input.addEventListener('keyup', eventHandler);
input.addEventListener('keypress', eventHandler);
input.addEventListener('focus', eventHandler);
input.addEventListener('blur', eventHandler);
input.addEventListener('cut', eventHandler);
input.addEventListener('paste', eventHandler);
input.addEventListener('select', eventHandler);

const form = document.querySelector('form');

form.addEventListener('submit', eventHandler);

const select = document.querySelector('#select');

select.addEventListener('change', eventHandler);

function eventHandler(e) {
    console.log('event type' + e.type);
    console.log('key code ' + e.keyCode);
    console.log('value' + e.target.value);
}