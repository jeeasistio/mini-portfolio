// BOOK CLASS
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CLASS
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    
    books.forEach(book => UI.addBookToList(book));
  }
  
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><i class="fas fa-trash"></i></td>
    `;
    list.appendChild(row);
  }
  
  static deleteBook(item) {
    if (item.classList.contains('fa-trash')) {
      item.parentElement.parentElement.style.animation = 'removed 0.5s ease';
      item.parentElement.parentElement.addEventListener('animationend', () => {
        item.parentElement.parentElement.remove();
      })
    }
  }
  
  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// STORAGE CLASS
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    })
    
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// EVENT: ADD BOOKS
document.querySelector('#book-form').addEventListener('submit', e => {
  // prevent default
  e.preventDefault();
  
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  
  // instantiate book
  const book = new Book(title, author, isbn);
  
  // add book to UI
  UI.addBookToList(book);
  
  // add book to local storage
  Store.addBook(book);
  
  // clear field
  UI.clearField();
})

// EVENT: REMOVE BOOKS
document.querySelector('#book-list').addEventListener('click', e => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
})