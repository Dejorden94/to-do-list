const button = document.getElementById('js--submit');
const input = document.getElementById('js--input');

const list = document.getElementById('js--todo-list');

button.addEventListener('click', () => {
    const inputData = input.value;
    if (inputData != '') {
        setToDoData(inputData);
        listToDo();
        return input.value = '';
    }
    return alert('Voeg een item toe!')
});

const setToDoData = (input) => {
    //Kijk of item al bestaad in de localStorage en stuurt true wanneer dit zo is.
    if (getData(input) != false) {
        return alert('Item al toegevoegd aan todo');
    }
    let data = getData();
    data = (data != false) ? data : []; //Als data niet bestaad, maak een lege aarray ndata aan.
    data.push(input); //Voeg het ingevoerde item toe aan de data array.
    data = JSON.stringify(data);
    return localStorage.setItem('toDoList', data);
};

const getData = (input = null) => {
    let data = JSON.parse(localStorage.getItem('toDoList'));
    if (data) { //Als er data is voor de onderstaande functie uit.
        if (input) { //Als de gebruiker input heeft gegeven voor de onderstaande functie uit.
            if (data.indexOf(input) != -1) {
                return data[input];
            } else {
                return false;
            }
        }
        return data;
    }
    return false;
}

const listToDo = () => {
    let list = document.getElementById('js--todo-list');
    let data = getData();
    let todos = ``
    if (data) {
        data.forEach((value, item) => { //Pak de waarde en de index van het object en maakr nieuwe li's aan.
            todos += `<li class="list-item">${value}&nbsp; &nbsp; &nbsp; <button onclick="removeData(${item})">Verwijder</button></li>`
        });
        list.innerHTML = todos;// Set de list zijn html  gelijk aan de todos variable waarde
    }
}

const removeData = (itemId) => {
    let data = getData(); //Haal data op uit local storage.
    if (data) {
        let newData = data.filter((current, index) => {
            return index != itemId //Voeg het element toe wanneer de index niet overeenkomt met het gegeven itemId.
        });
        newData = JSON.stringify(newData);
        localStorage.setItem('toDoList', newData); //Set de waarde van het toDolist item om naar de waarde van de newData array.
        listToDo();
    } else {
        alert("no data found");
    }
}

listToDo();