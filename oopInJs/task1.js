import { Book } from './Book.js';
import { EBook } from './EBook.js';

const heroes = new Book('Heroes', 'Joe Abercrombie', 2011);
const potter2 = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 1999);
const winds = new Book('Winds of winter', 'George R.R. Martin', 2077);
const redCountryEbook = new EBook('Red Country', 'Joe Abercrombie', 2012, 'mobi');

heroes.printInfo();
potter2.printInfo();
winds.printInfo();
redCountryEbook.printInfo();

console.log('-------');
console.log(Book.oldestBook([heroes, potter2, winds, redCountryEbook]));
console.log('-------');
console.log(EBook.bookToEBook(heroes, 'pdf'));
