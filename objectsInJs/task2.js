// Завдання 2

// Створіть об'єкт book з такими властивостями:

// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.

// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
	title: 'Best served cold',
	author: 'Joe Abercrombie',
	year: 2009,
};

const { title, author } = book;

console.log(`
  The book: "${title}"
  The author: ${author}
`);
