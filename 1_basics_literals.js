// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2003',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// What if we want to creat more than one object, like a "book2". The example below is without constructor

const book2 = {
    title: 'Book Two',
    author: 'John Doe',
    year: '2005',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2.getSummary());
//Only to get values of book2
console.log(Object.values(book2));
//Only to get keys of book2
console.log(Object.keys(book2));