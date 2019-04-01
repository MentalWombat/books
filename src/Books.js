import React from 'react';
import Book from './Book';
import './Books.css';

const Books = (props) => {
  const books = props.books.map(book => (
    <Book key={book.id} {...book} onDelete={props.onDelete}/>
  ));

  return(
    <div className="books">
      {books}
    </div>  
  );
}

export default Books;
