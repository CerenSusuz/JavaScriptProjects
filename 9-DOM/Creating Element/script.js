const li = document.createElement('li');
li.className = 'list-group-item list-group-item-primary';

li.setAttribute('title', 'new item');
li.setAttribute('data-id', '5');

const text = document.createTextNode('To do item');
li.appendChild(text);

const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item float-right';
a.innerHTML = '<i class="fas fa-times"></i>';
li.appendChild(a);

document.querySelector('#task-list').appendChild(li);
console.log(li);