const button = document.getElementById('js--submit');
const input = document.getElementById('js--input');

const list = document.getElementById('js--todo-list');

button.addEventListener('click', () => {
    if (input.value) {
        const inputValue = input.value;
        console.log(inputValue);
        const listItem = document.createElement('li');
        listItem.textContent = input.value;
        listItem.className = 'list-item';

        return list.appendChild(listItem);
    }
    return alert('Add an item!')
});