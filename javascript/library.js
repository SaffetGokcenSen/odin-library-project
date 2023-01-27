// the definition of the class Library
class Library {
    // the object books is a private property of the Library class 
    #books;
    // the constructor initiates the private property books
    constructor(books={}) {
        this.#books = books;
    }

    // the method for printing the information of each book in the library
    printBooks() {
        let key;
        for (key in Object.keys(this.#books)) {
            console.log(key);
        }
    }
}

class Book {
    #author;
    #title;
    #numOfPages;
    #publisher;
    #publicationDate;
    #readStatus;

    constructor(author, title, numOfPages, publisher, publicationDate, readStatus) {
        this.#author = author;
        this.#title = title;
        this.#numOfPages = numOfPages;
        this.#publisher = publisher;
        this.#publicationDate = publicationDate;
        this.#readStatus = readStatus;
    }

    // gets the title of the book
    getTitle() {
        return this.#title;
    }
}

const theLibrary = new Library();
theLibrary.printBooks();

const sampleBook = new Book("Test Author", "Test Title", 300, "Test Publisher", 1990, true);