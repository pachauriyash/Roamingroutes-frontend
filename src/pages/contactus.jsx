// Home.jsx
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/navbar.jsx';
import Contact from '../components/contact/contact.jsx';

import Footer from '../components/footer/footer.jsx';
import './contactus.css';

function Contactus({userdata, isLoggedIn, setIsLoggedIn}) {
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
Contactus.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  userdata: PropTypes.object,
};
export default Contactus;
