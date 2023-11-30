// Home.jsx
import Navbar from '../components/Navbar/navbar.jsx';
import { useParams } from 'react-router-dom';
import Blogpostheader from '../components/blogpostheader/blogpostheader.jsx';
import Footer from '../components/footer/footer.jsx';
import Subscribe from '../components/subscribe.jsx';
import Blogcontent from '../components/content/blogcontent.jsx';
import PropTypes from "prop-types";
import './blogpost.css';

function Blogs({ allArticles, isLoggedIn, setIsLoggedIn ,userdata}) {
  const { articleId } = useParams();
  
  // Find the article with matching _id
  const selectedArticle = allArticles.find(article => article._id === articleId);
  if (!selectedArticle) {
    // Handle the case when the article is not found
    return <div>Article not found</div>;
  }

  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Blogpostheader articledata={selectedArticle} />
        <Blogcontent userdata={userdata} articledata={selectedArticle}/>
        <Subscribe/>
        <Footer/>
      </div>
    </div>
  );
}
Blogs.propTypes = {
  allArticles: PropTypes.array,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  userdata: PropTypes.object,
};
export default Blogs;
