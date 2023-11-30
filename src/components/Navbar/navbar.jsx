// import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React ,{useState} from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
const Navbar = ({isLoggedIn,userdata,setIsLoggedIn}) => {
  // console.log("userdata",userdata);
  const handleLogout = async () => {
    try {
      // Make a POST request to the server's logout endpoint
      await axios.post(`${import.meta.env.VITE_YOUR_ENDPOINT}/logout`, null, {
        withCredentials: true,
      });
  
      // Reset user data and set isLoggedIn to false
      console.log("User has been logged out");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle error as needed
    }
  };
  
    //image url
    const logo = "/assets/logo.png";

    return (
      <>
        <div className={"navbar desktop design-component-instance-node"}>
        <div className={`container navbar-2`}>
        <div className="contentt">
        <Link to={"/"} style={{ color: 'inherit', textDecoration: 'none' }}><img  alt="Content" src={logo} style={{ width: "35%", height: "auto" }} /></Link>
        </div>
          <div className="column">
            <div className={`text-wrapper design-component-instance-node-2`}><Link to={"/blogs"} style={{ color: 'inherit', textDecoration: 'none' }}>Explore Blogs</Link></div>
            <div className={`text-wrapper design-component-instance-node-2`}><Link to={"/destinations"} style={{ color: 'inherit', textDecoration: 'none' }}>Discover Destinations</Link></div>
            <div className={`text-wrapper design-component-instance-node-2`}><Link to={"/publisharticle"} style={{ color: 'inherit', textDecoration: 'none' }}>Publish Blog</Link></div>
            <div className={`text-wrapper design-component-instance-node-2`}><Link to={"/contactus"} style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link></div>
          </div>
          <div className="actions">
        <div className={`style-primary-small navbar-2-instance`}>
          <div className={`button navbar-instance`}>
          {
              !isLoggedIn && <Link to={"/auth"} style={{ color: 'inherit', textDecoration: 'none' }}>Join</Link>
          }
          {isLoggedIn && (
  <Dropdown>
    <Dropdown.Toggle
      variant="success"
      id="dropdown-basic"
      className="transparent-toggle"
    >
      {userdata && userdata.Name}
    </Dropdown.Toggle>

    <Dropdown.Menu
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
      }}
    >
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)}

          </div>
        </div>
      </div>
        </div>
      
    </div>
    
    </>
    );
};
Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userdata: PropTypes.object,
  setIsLoggedIn: PropTypes.func,
};
export default Navbar;

