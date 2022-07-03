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
        <Calculator />
        <Footer />
      </>
    );
  }
}

export default App;
