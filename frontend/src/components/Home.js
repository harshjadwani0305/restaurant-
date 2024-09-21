// import React from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';
// import hotelImg1 from '../assets/images/hotel1.jpg';
// import hotelImg2 from '../assets/images/hotel2.jpg';
// import hotelImg3 from '../assets/images/hotel3.jpg';

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Navbar-like section with restaurant name and links */}
//       <header className="header">
//         <h1 className="restaurant-name">The Tasty Bite</h1>
//         <nav className="nav-links">
//           <Link to="/menu" className="nav-link">Menu</Link>
//           <Link to="/reservation" className="nav-link">Reservation</Link>
//         </nav>
//       </header>

//       {/* Carousel for hotel images */}
//       <Carousel className="carousel-container">
//         <Carousel.Item>
//           <img className="d-block w-100" src={hotelImg1} alt="Hotel 1" />
//           <Carousel.Caption>
//             <h3>Welcome to The Tasty Bite</h3>
//             <p>Experience the finest dining</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src={hotelImg2} alt="Hotel 2" />
//           <Carousel.Caption>
//             <h3>Delicious Meals Await</h3>
//             <p>Enjoy our chef's specialties</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src={hotelImg3} alt="Hotel 3" />
//           <Carousel.Caption>
//             <h3>Book Your Reservation Now</h3>
//             <p>Don't miss the best dining experience</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* About Us section */}
//       <footer className="about-us-section">
//         <h2>About Us</h2>
//         <p>
//           At The Tasty Bite, we pride ourselves on offering exquisite culinary experiences, 
//           blending traditional flavors with modern cooking techniques. Our chefs are dedicated 
//           to serving the freshest ingredients and creating memorable dining moments.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import hotelImg1 from '../assets/images/hotel1.jpg';
import hotelImg2 from '../assets/images/hotel2.jpg';
import hotelImg3 from '../assets/images/hotel3.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar-like section with restaurant name and links */}
      <header className="header">
        <h1 className="restaurant-name">The Tasty Bite</h1>
        <nav className="nav-links">
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/reservation" className="nav-link">Reservation</Link>
          <Link to="/staff-login" className="nav-link">Staff Login</Link>
        </nav>
      </header>

      {/* Carousel for hotel images */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img className="d-block w-100" src={hotelImg1} alt="Hotel 1" />
          <Carousel.Caption>
            <h3>Welcome to The Tasty Bite</h3>
            <p>Experience the finest dining</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotelImg2} alt="Hotel 2" />
          <Carousel.Caption>
            <h3>Delicious Meals Await</h3>
            <p>Enjoy our chef's specialties</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotelImg3} alt="Hotel 3" />
          <Carousel.Caption>
            <h3>Book Your Reservation Now</h3>
            <p>Don't miss the best dining experience</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* About Us section */}
      <footer className="about-us-section">
        <h2>About Us</h2>
        <p>
          At The Tasty Bite, we pride ourselves on offering exquisite culinary experiences, 
          blending traditional flavors with modern cooking techniques. Our chefs are dedicated 
          to serving the freshest ingredients and creating memorable dining moments.
        </p>
      </footer>
    </div>
  );
};

export default Home;
