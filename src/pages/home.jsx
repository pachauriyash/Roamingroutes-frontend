// Home.jsx
import Navbar from '../components/Navbar/navbar.jsx';
import Header from '../components/Header/header.jsx';
import Portfolio  from '../components/portfolio/portfolio.jsx';
import Blogcarousel from '../components/blogcarousel/blog.jsx';
import Subscribe from '../components/subscribe.jsx';
import Footer from '../components/footer/footer.jsx';
import './home.css';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import { useState, useEffect } from 'react';




function Home({carouselData,portfolioData, isLoggedIn, setIsLoggedIn,userdata }) {  
  return (
    <div className="box">
      <div className="home-2">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userdata={userdata}/>
        <Header />
        <Portfolio data={portfolioData}/>
        <Blogcarousel data={carouselData} />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}
Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  portfolioData: PropTypes.array.isRequired,
  carouselData: PropTypes.array.isRequired,
  userdata: PropTypes.object,
};
export default Home;
