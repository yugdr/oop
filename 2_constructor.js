// Constructor (is a function)
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiate an Object (to create an object using functions)
const book1 = new Book('Book One', 'John Doe', '2013');

const book2 = new Book('Book Two', 'John Doe', '2016');
