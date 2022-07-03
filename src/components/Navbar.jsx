/* eslint-disable linebreak-style */
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <span className="logo">Maths Magicians</span>
        <div className="nav-links-container">
          <a href="/" className="link-link">
            Home
          </a>
          <a href="/" className="link-link">
            Calculator
            <a href="/" className="link-link">
              Quote
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
