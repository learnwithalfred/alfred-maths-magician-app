import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Home.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to our page!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          labore vero commodi cum sequi hic, consectetur perferendis quo
          eligendi ab maxime, vel modi quisquam voluptates. Ratione accusantium
          debitis quaerat repellat! Ab voluptates ea voluptas, molestias
          quisquam suscipit officia tenetur te optio distinctio quas ducimus
          cumque doloribus beatae ut laborum iste explicabo veniam nam? Debitis
          esse blanditiis praesentium iste minus necessitatibus corrupti harum
          ipsam molestias.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          molestiae explicabo omnis, luptate, minima impedit quisquam officiis
          suscipit dolor, sit sequi quod fugit nisi quaerat doloremque velit
          saepe. Illum soluta modi quam ex odio?
        </p>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
