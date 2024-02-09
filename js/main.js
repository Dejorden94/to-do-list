const button = document.getElementById('js--submit');
const input = document.getElementById('js--input');

const list = document.getElementById('js--todo-list');

button.addEventListener('click', () => {
    const inputValue = input.value;
    console.log(inputValue);
    input.value = '';
    if (inputValue) {

    }
});