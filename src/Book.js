import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
	render() {
		return(
			<div className="book">
				<h2>{this.props.title}</h2>
        <h3>{this.props.author}</h3>
        <p>{this.props.imprint}</p>
        <p>{this.props.pDate}</p>
        <p>{this.props.isbn}</p>
			</div>
		);
	}
}

export default Book;