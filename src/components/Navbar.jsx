import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/" className="logo">
          Maths Magicians
        </Link>

        <div className="nav-links-container">
          <Link className="link-link" to="/">
            Home
          </Link>
          <Link className="link-link" to="/maths">
            Calculator
          </Link>
          <Link className="link-link" to="/quotes">
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
