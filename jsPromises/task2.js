// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user

// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
// Присвойте значення отримані від цих виразів до змінних

const baseUrl = 'https://jsonplaceholder.typicode.com';

function requestTodo() {
    
    return fetch(`${baseUrl}/todos/1`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => {
            console.error('Error in fetchTodo:', error);
            throw error;
        });
    
}

function requestUser() {
    
    return fetch(`${baseUrl}/users/1`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => {
            console.error('Error in fetchUsers:', error);
            throw error;
        });   
}

const resPromAll = Promise.all([requestTodo(), requestUser()]);
const resPromRace = Promise.race([requestTodo(), requestUser()]);
