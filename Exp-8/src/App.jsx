import { useState } from 'react';
import './App.css'
import BookList from './components/BookList';
function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  function addBook(formData) {
    const bookName = formData.get('bookName');
    const authorName = formData.get('authorName')
    const newBook = { title: bookName, author: authorName };
    setBooks([...books, newBook]);
    setFilteredBooks([...books, newBook]);
  }

  function removeBook(bookName) {
    setBooks(books.filter(book => book.title !== bookName));
    setFilteredBooks(filteredBooks.filter(book => book.title !== bookName));
  }

  function onSearch(event) {
    const string = event.target.value;
    const search = string.toLowerCase();  
    setFilteredBooks(
      books.filter(
      book =>
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
      )
    );
  }

  return (
    <div className="container">
      <h2>Library Management</h2>
      <input type="text" name="search" id="search" placeholder='Search by title or author' onChange={onSearch} />
      <form action={addBook}>
        <input type="text" name="bookName" id="bookName" placeholder="Book Name" />
        <input type="text" name="authorName" id="authorName" placeholder="Author Name" />
        <button type="submit">Add Book</button>
      </form>

      <BookList books={filteredBooks} onRemove={removeBook}></BookList>
    </div>
  );
}

export default App
