import React from 'react';
import Book from './Book';
import './Books.css';

const Books = (props) => {
  const books = props.books.map(book => (
    <Book
      key={book.isbn}
      author={book.author}
      title={book.title}
      imprint={book.imprint}
      pDate={book.date}
      isbn={book.isbn}
    />
  ));

  return(
    <div className="books">
      {books}
    </div>  
  );
}

export default Books;
