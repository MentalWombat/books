import React, { Component } from 'react';
import Navbar from './Navbar';
import NewBookForm from './NewBookForm';
import Books from './Books';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 0,
          isbn: 9781491924440,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Up & Going",
          imprint: "O'Reilly Media",
          date: "March 2015"
        },
        {
          id: 1,
          isbn: 9781449335564,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Scope & Closures",
          imprint: "O'Reilly Media",
          date: "March 2014"
        },
        {
          id: 2,
          isbn: 9781491904145,
          author: "Kyle Simpson",
          title: "You Don't Know JS: this & Object Prototypes",
          imprint: "O'Reilly Media",
          date: "July 2014"
        },
        {
          id: 3,
          isbn: 9781491904183,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Types & Grammar",
          imprint: "O'Reilly Media",
          date: "January 2015"
        },
        {
          id: 4,
          isbn: 9781491905210,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Async & Performance",
          imprint: "O'Reilly Media",
          date: "February 2015"
        },
        {
          id: 5,
          isbn: 9781491905265,
          author: "Kyle Simpson",
          title: "You Don't Know JS: ES6 & Beyond",
          imprint: "O'Reilly Media",
          date: "December 2015"
        }
      ],
      nextBookId: 6,
      showForm: false,
    }
    this.handleSave = this.handleSave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSave(book) {
    this.setState((prevState, props) => {
      const newBook = {...book, id: this.state.nextBookId};
      return {
        nextBookId: prevState.nextBookId + 1,
        books: [...this.state.books, newBook],
        showForm: false
      }
    });
  }

  handleClick() {
    this.setState(prev => ({ showForm: !prev.showForm }))
  }

  handleDelete(id) {
    const books = this.state.books.filter(b => b.id !== id);
    this.setState({books});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar handleClick={this.handleClick} toggleBtn={this.state.showForm}/>
        { showForm ?
          <NewBookForm
            onSave={this.handleSave}
          /> :
          null }
        <Books books={this.state.books} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
