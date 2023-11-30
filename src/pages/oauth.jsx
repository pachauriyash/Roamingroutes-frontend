// Home.jsx
import Navbar from '../components/Navbar/navbar.jsx';
import Auth from '../components/auth/auth.jsx';
import Footer from '../components/footer/footer.jsx';
import './oauth.css';
import PropTypes from 'prop-types';
function Oauth({ isLoggedIn, setIsLoggedIn, setuserdata,userdata}) {
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn}/>
        <Auth  setIsLoggedIn={setIsLoggedIn} setuserdata={setuserdata}/>
        <Footer/>
      </div>
    </div>
  );
}
Oauth.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
    setuserdata: PropTypes.func,
    userdata: PropTypes.object,
  };
export default Oauth;
