// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб.
// Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

const user1 = 'Alice';
const user2 = 'Frank';
const greetingsForUsers = 'Hello ' + user1 + ' and ' + user2 + '!';
const greetingsForUsers2 = `Hello ${user1} and ${user2}!`;

console.log(greetingsForUsers);
console.log(greetingsForUsers2);
