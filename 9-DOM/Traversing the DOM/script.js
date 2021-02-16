let value;

let list = document.querySelector('.list-group');

value = list;

value = list.childNodes; //  node list  via text node

value = list.children; // html collection not via text node

value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType;

value = list.children[1].children;

value = list.firstChild;
value = list.firstElementChild;

value = list.lastChild;
value = list.lastElementChild;

value = list.childElementCount;

value = list.parentNode;
value = list.parentElement;
value = list.parentElement.parentElement;

value = list.children[1].previousElementSibling;
value = list.children[0].nextElementSibling;

for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i]);
}

console.log(value);