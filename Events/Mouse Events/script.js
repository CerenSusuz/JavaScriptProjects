const btn = document.querySelector('btnDeleteAll');
const ul = document.querySelector('#task-list');

btn.addEventListener('click', eventHandler);
ul.addEventListener('click', eventHandler);

btn.addEventListener('dblclick', eventHandler);

btn.addEventListener('mousedown'.eventHandler);

ul.addEventListener('mouseenter', eventHandler);

ul.addEventListener('mouseleave', eventHandler);

ul.addEventListener('mouseover', eventHandler);

ul.addEventListener('mouseout', eventHandler);

ul.addEventListener('mousemove', eventHandler);

function eventHandler(event) {
    console.log(`event type : ${event.type}`);
}