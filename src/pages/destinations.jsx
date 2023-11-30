// Home.jsx
import Navbar from '../components/Navbar/navbar.jsx';
import Footer from '../components/footer/footer.jsx';
import Blogscta from '../components/blogscta/blogscta.jsx';
import Destinationsheader from '../components/destinationsheader/destinationsheader.jsx';
import Destinationslayout from '../components/destinationslayout/destinationslayout.jsx';
import Destinationcarousel from '../components/destinationcarousel/destinationcarousel.jsx';
import './blogs.css';
import PropTypes from 'prop-types';

function Destinations({userdata, destinationsData, isLoggedIn, setIsLoggedIn}) {
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Destinationsheader/>   
        <Destinationslayout/>
        <Destinationcarousel destinationsData={destinationsData}/>
        <Blogscta/>
        <Footer/>
      </div>
    </div>
  );
}
Destinations.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  destinationsData: PropTypes.array.isRequired,
  userdata: PropTypes.object,
};
export default Destinations;
