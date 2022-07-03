/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home-container">
          <div className="left-side">
            <span>Let's do some maths!</span>
          </div>
          <Calculator />
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
