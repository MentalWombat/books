import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
		return(
      <div className="navbar">
        <h1>Books</h1>
        <button
          className={`btn ${this.props.toggleBtn ? "btn-close" : "btn-add"}`}
          onClick={this.props.handleClick}
        >
          +
        </button>
      </div>
		);
	}
}

export default Navbar;