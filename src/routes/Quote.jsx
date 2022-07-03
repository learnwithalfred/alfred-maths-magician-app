import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function QuotesPage() {
  return (
    <>
      <Navbar />
      <p
        style={{
          margin: '2rem',
          fontSize: '1.2rem',
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        laborum animi pariatur eveniet quam sint culpa saepe fuga, expedita ipsa
        omnis sapiente consectetur hic libero iste id? Et, voluptas nisi.
      </p>

      <Footer />
    </>
  );
}
export default QuotesPage;
