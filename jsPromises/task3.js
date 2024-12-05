// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити


const baseUrl = 'https://jsonplaceholder.typicode.com';

async function requestTodo() {
    try {
        const response = await fetch(`${baseUrl}/todos/1`);
        if (!response.ok){
            throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error('An error occurred:', error);
        throw error;
    }
}

async function requestUser() {
    try{
        const response = await fetch(`${baseUrl}/users/1`);
        if(!response.ok){
            throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }       
}

requestTodo().then(console.log);
requestUser().then(console.log);
