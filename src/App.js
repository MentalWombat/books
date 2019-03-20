import React, { Component } from 'react';
import Navbar from './Navbar';
import Books from './Books';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          isbn: 9781491924440,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Up & Going",
          imprint: "O'Reilly Media",
          date: "March 2015"
        },
        {
          isbn: 9781449335564,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Scope & Closures",
          imprint: "O'Reilly Media",
          date: "March 2014"
        },
        {
          isbn: 9781491904145,
          author: "Kyle Simpson",
          title: "You Don't Know JS: this & Object Prototypes",
          imprint: "O'Reilly Media",
          date: "July 2014"
        },
        {
          isbn: 9781491904183,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Types & Grammar",
          imprint: "O'Reilly Media",
          date: "January 2015"
        },
        {
          isbn: 9781491905210,
          author: "Kyle Simpson",
          title: "You Don't Know JS: Async & Performance",
          imprint: "O'Reilly Media",
          date: "February 2015"
        },
        {
          isbn: 9781491905265,
          author: "Kyle Simpson",
          title: "You Don't Know JS: ES6 & Beyond",
          imprint: "O'Reilly Media",
          date: "December 2015"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Books books={this.state.books}/>
      </div>
    );
  }
}

export default App;
