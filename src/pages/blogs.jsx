// Home.jsx
import Navbar from '../components/Navbar/navbar.jsx';
import Blogsheader from '../components/blogsheader/blogsheader.jsx';

import Footer from '../components/footer/footer.jsx';
import Desktopwrapper from '../components/Desktopwrapper/desktopwrapper.jsx';
import Blogscta from '../components/blogscta/blogscta.jsx';
import './blogs.css';

function blogs({userdata, isLoggedIn, setIsLoggedIn,blogsData,destinationsData}) {
  return (
    <div className="box">
      <div className="home-2">
        <Navbar userdata={userdata} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Blogsheader data={blogsData}/>
        <Desktopwrapper destinationsData={destinationsData}/>
        <Blogscta/>
        <Footer/>
      </div>
    </div>
  );
}

export default blogs;
