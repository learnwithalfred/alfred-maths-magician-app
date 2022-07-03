import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span>
        Created with love by
        <a
          href="github.com/learnwithalfred/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className="user-link">alfred boateng</span>
        </a>
      </span>
    </footer>
  );
}

export default Footer;
