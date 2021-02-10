// remove

const taskList = document.querySelector('#task-list');

taskList.remove();

taskList.childNodes[1].remove();
taskList.children.remove();

taskList.removeChild(taskList.children[3]);
taskList.removeAttribute('class');

console.log(taskList);

// replacing

const cardHeader = document.querySelector('.card-header');

// create element

const h3 = document.createElement('h3');
h3.setAttribute('class', 'card-header');
h3.appendChild(document.createTextNode('my list'));

const parent = document.querySelector('.card');
parent.replaceChild(h2, cardHeader);

console.log(cardHeader);

let value;

link = taskList.children[0].children[0];
value = link.className;
value = link.classList;
value = link.classList[0];

link.classList.add('new');
link.classList.remove('new');

value = link.getAttribute('class ');
value = link.setAttribute('href', '...');
value = link.hasAttribute('href');

console.log(value);