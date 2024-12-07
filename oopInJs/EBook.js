import { Book } from './Book.js';
export class EBook extends Book {
	constructor(name, author, releaseYear, fileFormat) {
		super(name, author, releaseYear);
		this._fileFormat = fileFormat;
	}

	printInfo() {
		console.log(
			`The EBook "${this._name}" ${this._author} was released in ${this._releaseYear} and has a format "${this._fileFormat}".`,
		);
	}

	set fileFormat(fileFormat) {
		if (fileFormat.length > 4) {
			console.log('Wrong file format');
		} else {
			this._fileFormat = fileFormat;
		}
	}

	get fileFormat() {
		return this._fileFormat;
	}

	static bookToEBook(book, _fileFormat) {
		return { ...book, _fileFormat };
	}
}
