export class Book {
  constructor (name, author, releaseYear) {
    this._name = name;
    this._author = author;
    this._releaseYear = releaseYear;
  }

  printInfo () {
    console.log(`The paper book "${this._name}" ${this._author} was released in ${this._releaseYear}.`);
  }

  set name(name) {
    if(typeof name !== 'string') {
      console.log('Name should be string');
    } else {
      this._name = name;
    }
  }

  set author(author) {
    if(typeof author !== 'string') {
      console.log('Author should be string');
    } else {
      this._author = author;
    }
  }

  set releaseYear(releaseYear) {
    if(typeof releaseYear !== 'number') {
      console.log('Release year should be number');
    } else {
      this._releaseYear = releaseYear;
    }
  }

  get name(){
    return this._name;
  }

  get author(){
    return this._author;
  }

  get releaseYear(){
    return this._releaseYear;
  }

  static oldestBook (array) {
    let oldestBookYear = array[0].releaseYear;
    let oldestBook = array[0];

    for (let book of array) {
      if (book.releaseYear <= oldestBookYear) {
        oldestBookYear = book.releaseYear;
        oldestBook = book;
      }
    }

    return oldestBook;
  }

}
