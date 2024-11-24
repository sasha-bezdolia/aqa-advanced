// Завдання 5

//     Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
//     Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
//     Зробіть деструктуризацію в циклі

const users = [{
  name: 'John',
  email: 'john.snow@gmail.com',
  age: 20,
}, {
  name: 'Aria',
  email: 'aria.stark@gmail.com',
  age: 15,
}];

for (const {name, email, age} of users) {
  console.log(`
      ${name},
      ${email},
      ${age}
  `);
}

