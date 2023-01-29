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

    // remove the book from the books object, i.e. from the library
    removeBook(removedBook) {
        delete this.#books[removedBook.getTitle()];
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

    // gets the author of the book
    getAuthor() {
        return this.#author;
    }

    // gets the number of pages of the book
    getNumOfPages() {
        return this.#numOfPages;
    }

    // gets the publisher of the book
    getPublisher() {
        return this.#publisher;
    }

    // gets the publication date of the book
    getPublicationDate() {
        return this.#publicationDate;
    }

    // gets the read status of the book
    getReadStatus() {
        return this.#readStatus;
    }

    // sets the read status of the book
    setReadStatus(theStatus) {
        this.#readStatus = theStatus;
    }
}

const theLibrary = new Library();
theLibrary.printBooks();

const sampleBook = new Book("Test Author", "Test Title", 300, "Test Publisher", 1990, true);
const sampleBook2 = new Book("Test Author2", "Test Title2", 423, "Test Publisher2",2010, true);
theLibrary.addBook(sampleBook);
theLibrary.addBook(sampleBook2);
theLibrary.printBooks();
theLibrary.removeBook(sampleBook);
theLibrary.printBooks();