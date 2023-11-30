// Home.jsx
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/navbar.jsx';
import Blogpostheader from '../components/blogpostheader/blogpostheader.jsx';
import Blogcontent from '../components/content/blogcontent.jsx';
import Footer from '../components/footer/footer.jsx';
import Subscribe from '../components/subscribe.jsx';

import './destinationpost.css';

function Destinationpost({userdata, isLoggedIn, setIsLoggedIn}) {
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Blogpostheader/>
        <Blogcontent/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  );
}
Destinationpost.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  userdata: PropTypes.object,
};
export default Destinationpost;
