import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return(
      <div className="navbar">
        <h1>Books</h1>
        <button className="btn-add">+</button>
      </div>
		);
	}
}

export default Navbar;