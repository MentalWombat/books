import React from 'react';
import './Book.css';

const Book = (props) => {
	return(
		<div className="book">
			<h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.imprint}</p>
      <p>{props.pDate}</p>
      <p>{props.isbn}</p>
		</div>
	);
}

export default Book;