const button = document.getElementById('js--submit');
const input = document.getElementById('js--input');

const list = document.getElementById('js--todo-list');

button.addEventListener('click', () => {
    const inputData = input.value;
    if (inputData != '') {
        return setToDoData(inputData);
        // listToDo();
    }
    return alert('Voeg een item toe!')
});

let setToDoData = (input) => {
    //Kijk of item al bestaad in de localStorage en stuurd truw wanneer dit zo is.
    if (getData(input) != false) {
        return alert('Item al toegevoegd aan todo');
    }
    let data = getData();
    data = (data != false) ? data : []; //Als data niet bestaad, maak een lege aarray ndata aan.
    data.push(input); //Voeg het ingevoerde item toe aan de data array.
    data.JSON.stringify(data);
    return localStorage.setItem('toDoList', data);
};