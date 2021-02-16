let value;

value = window.document;
value = document.head;
value = document.body;
value = document.URL;
value = document.title;
value = document.domain;
value = document.images;
value = document.forms;
value = document.forms[0].id;
value = document.forms[0].method;
value = document.forms[0].action;
value = document.scripts;

// selecting single element

value = document.getElementById('id');
value.id;
value.className;
value.style.display = 'none';
value.style.fontSize = '40px';
value.style.fontWeight = 'bold';
value.innerText = 'hello';
value.innerHTML = '<b>hello</b>';

// first element
value = document.querySelector('#id');
value = document.querySelector('.className');
value = document.querySelector('h1');


// last element
document.querySelector('li:last-child').style.fontSize = '22px';

// any element
value = document.querySelector('li:nth-child(2)');


// selecting multiple elements

value = document.getElementsByClassName('className');
for (let i = 0; i < value; i++) {
    console.log(value[i].style.color = 'red');
}

value = value[2].fontSize = '32px';
value[3].textContent = 'affdag';

value = document.getElementsByTagName('li');

value = document.getElementById('id').getElementsByTagName('a');

value = document.querySelectorAll('li');

value.forEach(function(item, index) {
    item.textContent = 'asddf';
});

value = document.querySelectorAll('li:nth-child(odd)');
value = document.querySelectorAll('li:nth-child(even)');

console.log(value);