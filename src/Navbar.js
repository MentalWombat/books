import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return(
      <div className="navbar">
        <h1>Books</h1>
        <p className="btn-add">+</p>
      </div>
		);
	}
}

export default Navbar;