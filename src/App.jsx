// Desc: This is the main app component that renders the navbar component
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/home.jsx'
import Blogs from './pages/blogs.jsx'
import Destinations from './pages/destinations.jsx'
import Blogpost from './pages/blogpost.jsx'
// import Destinationpost from './pages/destinationpost.jsx'
import Contactus from './pages/contactus.jsx'
import Publisharticle from './pages/publisharticle.jsx'
import Editarticle from './pages/editarticle.jsx'
import Oauth from './pages/oauth.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogsData, setblogsData] = useState([]);
  const [destinationsData, setdestinationsData] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  const [userdata, setuserdata] = useState(null);
  // Trigger state for useEffect
  const [updateTrigger, setUpdateTrigger] = useState(false);
// Function to trigger useEffect when a new article is published
const handleArticlePublish = () => {
  // Additional logic related to publishing...
  // console.log('I was called');
  // Set updateTrigger to true to trigger the useEffect hooks
  setUpdateTrigger(prevTrigger => !prevTrigger);
  // console.log(userdata);
};
  useEffect(() => {
    // Make an Axios GET request to check login status
    axios.get(`${import.meta.env.VITE_YOUR_ENDPOINT}/check-login-status`,{ withCredentials: true })
      .then(response => {
        // If the response indicates the user is logged in, set the state accordingly
        setIsLoggedIn(response.data.isLoggedIn);
        setuserdata(response.data.userdata);
      })
      .catch(error => {
        console.error('Error checking login status:', error);
      });
  }, [isLoggedIn]); // The empty dependency array ensures the effect runs once on component mount

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_YOUR_ENDPOINT}/all-blogs `)
      .then(response => {
        setblogsData(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [updateTrigger]); // The empty dependency array ensures the effect runs once on component mount
  useEffect(() => {

    axios.get(`${import.meta.env.VITE_YOUR_ENDPOINT}/all-destinations`)
      .then(response => {
        setdestinationsData(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [updateTrigger]); // The empty dependency array ensures the effect runs once on component mount
  useEffect(() => {
    axios.get( `${import.meta.env.VITE_YOUR_ENDPOINT}/featured-blogs`)
      .then(response => {
         setCarouselData(response.data.blogs);
         setPortfolioData(response.data.destinations);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // Combine blogsData and destinationsData into allArticles
  useEffect(() => {
    setAllArticles([...blogsData, ...destinationsData]);
  }, [blogsData, destinationsData]);

 

  return (
    <Router>
    <Routes>
          <Route path="/" element={<Home userdata={userdata} portfolioData={portfolioData} carouselData={carouselData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/blogs" element={<Blogs userdata={userdata} destinationsData={destinationsData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} blogsData={blogsData}/>} />
          <Route path="/article/:articleId" element={<Blogpost  userdata={userdata} allArticles={allArticles} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/destinations" element={<Destinations userdata={userdata} destinationsData={destinationsData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          {/* <Route path="/destinationpost" element={<Destinationpost isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} /> */}
          <Route path="/contactus" element={<Contactus userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/publisharticle" element={!isLoggedIn ? <Navigate to="/auth" /> : <Publisharticle userdata={userdata} handleArticlePublish={handleArticlePublish} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/editarticle/:articleId" element={<Editarticle userdata={userdata} handleArticlePublish={handleArticlePublish} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }/>
          <Route path="/auth" element={isLoggedIn ? <Navigate to="/" /> : <Oauth isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setuserdata={setuserdata} />} // Log statement to check if the route is being triggered
  onNavigate={(props) => console.log('Navigate props:', props)}/>
      </Routes>
      </Router>
  );
}

export default App;