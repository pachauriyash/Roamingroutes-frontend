// Home.jsx
import Navbar from '../components/Navbar/navbar.jsx';
import Createpost from '../createpost/createpost.jsx';
import PropTypes from 'prop-types';
import Footer from '../components/footer/footer.jsx';
import './publisharticle.css';

function Publisharticle({handleArticlePublish, isLoggedIn, setIsLoggedIn, userdata}) {
  
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Createpost handleArticlePublish={handleArticlePublish} />
        <Footer/>
      </div>
    </div>
  );
}
Publisharticle.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  handleArticlePublish: PropTypes.func,
  userdata: PropTypes.object,
};
export default Publisharticle;
