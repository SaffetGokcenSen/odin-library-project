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
    removeBook(theTitle) {
        delete this.#books[theTitle];
    } 
}

class Book {
    #author;
    #title;
    #numOfPages;
    #publisher;
    #publicationDate;
    #readStatus;

    constructor(author, title, numOfPages, publisher, publicationDate, readStatus=false) {
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

    // removes the book from the library
    removeMeFromLibrary(theLibrary) {
        theLibrary.removeBook(this.#title);
    }
}

// Create a new Library object
const theLibrary = new Library();
// Create the first sample book object
const sampleBook = new Book("Test Author", "Test Title", 300, "Test Publisher", 1990);
// Create the second sample book object
const sampleBook2 = new Book("Test Author2", "Test Title2", 423, "Test Publisher2", 2010);
// Create the third sample book object
const sampleBook3 = new Book("Test Author3", "Test Title3", 231, "Test Publisher3", 1991);
// The sample books are added to the library
theLibrary.addBook(sampleBook);
theLibrary.addBook(sampleBook2);
theLibrary.addBook(sampleBook3);
// The read status of the second sample boook is updated
sampleBook2.setReadStatus(true);
// The first book is removed from the library
sampleBook.removeMeFromLibrary(theLibrary);
// The books in the library are printed to the console
theLibrary.printBooks();

// The access to the add-book-button
const addBookButton = document.getElementById('add-book-button');
// The access to the add-book-form
const addBookForm = document.getElementById('add-book-form');
// When the add-book-button is clicked, a form for entering book info appears
addBookButton.addEventListener('click', bringInTheForm);
// The access to the close-form-button
const closeFormButton = document.getElementById('close-form-button');
// When the close-form-button is clicked, the form for enterin the book info disappears
closeFormButton.addEventListener('click', magicAwayTheForm)
// The access to the submit-book-info button
const submitBookInfo = document.getElementById('submit-book-info');
// When the submit-book-info button is clicked, the information is recorded
submitBookInfo.addEventListener('click', deliverBookInfo);

// This function makes the add-book-form appear
function bringInTheForm() {
    addBookForm.style.display = "block";
}

// This function makes the add-book-form disappear
function magicAwayTheForm() {
    addBookForm.style.display = "none";
}

// the access to the book list div
let divBookList = document.getElementById("book-list");

// This function submits the book info
function deliverBookInfo(evt) {
    evt.preventDefault();
    let bookTitle = document.getElementById('book-title').value;
    let bookAuthor = document.getElementById('author-name').value;
    let bookPublisher = document.getElementById('publisher').value;
    let bookPublicationDate = document.getElementById('publication-date').value;
    let bookPageNumber = document.getElementById('number-of-pages').value;
    // A new book is created using the form values
    const theBook = new Book(
        bookAuthor, 
        bookTitle, 
        bookPageNumber, 
        bookPublisher, 
        bookPublicationDate
    );
    // The new book is added to the library
    theLibrary.addBook(theBook);
    // The add-book-form is reset
    addBookForm.reset();
    // The books are printed to the console for test purposes
    theLibrary.printBooks();
    // The add-book-form disappears
    addBookForm.style.display = "none";

    // the div containing the book info part and the book buttons part
    let parentDiv = document.createElement("div");

    
    // the part containing the book info
    let childDiv1 = document.createElement("div");

    // p element for displaying the book title
    let pTitle = document.createElement("p");
    // the title of the book
    let titleText = document.createTextNode(bookTitle);
    // the title of the book is displayed
    pTitle.appendChild(titleText);
    // the paragraph with the title of the book is added to the book list
    divBookList.appendChild(pTitle);

    // p element for displaying the book author
    let pAuthor = document.createElement("p");
    // the author of the book
    let authorText = document.createTextNode(bookAuthor);
    // the author of the book is displayed
    pAuthor.appendChild(authorText);
    // the paragraph with the author of the book is added to the book list
    divBookList.appendChild(pAuthor);
    
    
    // the part containing the book buttons part
    let childDiv2 = document.createElement("div");
}