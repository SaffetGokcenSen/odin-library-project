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
        console.log(this.#books);
    }

    // add a new book to the #books object with the key equal to the title of 
    // the book
    addBook(newBook) {
        this.#books[newBook.getTitle()] = newBook;
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
const sampleBook2 = new Book("Test Author2", "Test Title2", 423, "Test Publisher2",2010, true);
theLibrary.addBook(sampleBook);
theLibrary.addBook(sampleBook2);
theLibrary.printBooks();