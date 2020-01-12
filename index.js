
const listElement = document.querySelector('ul');
let items = [
    'Eggs',
    'Milk',
    'Bread',
    'Humous'
];

function add() {
    const inputElement = document.querySelector('input');
    if (inputElement.value !== '') {
        items.push(inputElement.value);
        inputElement.value = '';
        drawList();
    }
}

function remove(text) {
    items = items.filter(function(element) {
        return element !== text;
    });
    drawList();
}

function drawList() {
    listElement.innerHTML = '';
    items.forEach(function(element){
        const liElement = document.createElement('li');
        const button = `<button type="button" onclick="remove('${element}')">Delete</button>`;
        liElement.textContent = element;
        liElement.innerHTML = liElement.innerHTML + button;
        listElement.appendChild(liElement);
    });
}

drawList();
