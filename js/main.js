const button = document.getElementById('js--submit');
const input = document.getElementById('js--input');

button.addEventListener('click', () => {
    const inputValue = input.value;
    console.log(inputValue);
    input.value = '';
});