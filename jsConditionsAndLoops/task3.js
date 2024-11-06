// Завдання 3: Генерація таблиці множення

// Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

// Виберіть число для якого потрібно згенерувати таблицю множення.
// Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
// Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.

const num1 = 5;
const num2 = 7;

console.log('Result with "For" cycle:');
for (let i = 1; i <= 10; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
}
console.log('-----------');

let j = 1;
console.log('Result with "While" cycle:');
while (j <= 10) {
  console.log(`${num2} x ${j} = ${num2 * j}`);
  j++;
}