
import Navbar from '../components/Navbar/navbar.jsx';
import Editpost from '../createpost/editpost.jsx';
import PropTypes from 'prop-types';
import Footer from '../components/footer/footer.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './editarticle.css';

import { useParams } from 'react-router-dom';

function Editarticle({ userdata, isLoggedIn, handleArticlePublish, setIsLoggedIn}) {
  const { articleId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_YOUR_ENDPOINT}/editarticle/${articleId}`, { withCredentials: true });
        
        // If the response is successful, set the article data
        // console.log(response.data.articleData);
        setArticleData(response.data.articleData);
      } catch (error) {
        // If there's an error, set the error state
        setError(error.response?.data?.error || 'Internal server error');
      } finally {
        // Set loading to false, indicating that data fetching is complete
        setLoading(false);
      }
    };

    fetchData();
  }, [articleId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the case when there's an error (e.g., unauthorized or internal server error)
    return <div>Error: {error}</div>;
  }

  
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Editpost articleData={articleData} handleArticlePublish={handleArticlePublish} />
        <Footer/>
      </div>
    </div>
  );
}
Editarticle.propTypes = {

  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  handleArticlePublish: PropTypes.func,
  userdata: PropTypes.object,

};
export default Editarticle;