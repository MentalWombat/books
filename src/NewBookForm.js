import React, { Component } from 'react';
import './NewBookForm.css';

class NewBookForm extends Component {
	constructor(props) {
		super(props);
    this.state = {
      title: '',
      author: '',
      imprint: '',
      date: '',
      isbn: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      author: '',
      imprint: '',
      date: '',
      isbn: ''
    })
  }

	render() {
    const {title, author, imprint, date, isbn} = this.state;

		return (
      <div className="book-form-container">
  			<form className="book-form" onSubmit={this.handleSubmit}>
          <button
            className="close-btn"
            type="button"
            onClick={()=>{}}
          >
            X
          </button>
          <div className="inputs">
            <div className="input">
              <label htmlFor="book-title-input">Title: </label>
              <input
                id="book-title-input"
                name="title"
                type="text"
                value={title}
                onChange={this.handleChange} />
            </div>
            <div className="input">
              <label htmlFor="book-author-input">Author: </label>
              <input
                id="book-author-input"
                name="author"
                type="text"
                value={author}
                onChange={this.handleChange} />
            </div>
            <div className="input">
              <label htmlFor="book-imprint-input">Imprint: </label>
              <input
                id="book-imprint-input"
                name="imprint"
                type="text"
                value={imprint}
                onChange={this.handleChange} />
            </div>
            <div className="input">
              <label htmlFor="book-date-input">Published: </label>
              <input
                id="book-date-input"
                name="date"
                type="text"
                value={date}
                onChange={this.handleChange} />
            </div>
            <div className="input">
              <label htmlFor="book-isbn-input">ISBN: </label>
              <input
                id="book-isbn-input"
                name="isbn"
                type="text"
                value={isbn}
                onChange={this.handleChange} />
            </div>
          </div>
          <button
            className="submit-btn"
            type="submit"
          >
            Add book
          </button>
  			</form>
      </div>
		);
	}
}

export default NewBookForm;