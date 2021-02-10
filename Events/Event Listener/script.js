const btn = document.querySelector('#btnDeleteAll');

// option one, can use just this place
// btn.addEventListener('click', function() {
//     console.log('btn clicked');
// });

// option two, can use more than one place
function btnClick() {
    console.log('btn clicked ');
}
btn.addEventListener('click', btnClick);

function btnClickTwo(e) {
    let value;

    value = e;
    value = e.target;
    value = e.target.id;
    value = e.target.classList;
    value = e.target.type;

    console.log(value);
    e.preventDefault();
}
btn.addEventListener('click', btnClick);