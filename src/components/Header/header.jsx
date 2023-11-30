// import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";

const Header = () => {
    //image url
    const placeholderImage = "/assets/headerimg.png";
    
   


    return (
        <div className={`header2 breakpoint-desktop design-component-instance-node-3`}>
        <div className="column-44">
          <div className="content-2">
            <p className={`medium-length-hero design-component-instance-node-4`}>{
                <>
                Discover the World with 
                <br />
                RoamingRoutes
              </>
            }</p>
            <p className={`lorem-ipsum-dolor design-component-instance-node-4`}>Welcome to RoamingRoutes! Get inspired by our featured destinations, read   our informative blogs, and find useful resources to plan your next adventure.</p>
          </div>
          <div className={`actions-2 header-1`}>
              <>
                <div className={`style-primary-small-wrapper header-instance`}>
                    <div className={`button-2 header-1-instance`}>
                    <a href={'#blog'} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Blogs
                      </a>
                    </div>
                </div>
                <div className={`style-secondary header-2`}>
                    <div className={`button-3 design-component-instance-node-4`}>
                      <a href={'#portfolio'} style={{ color: 'inherit', textDecoration: 'none' }}>
                      Destinations
                      </a>
                    </div>
                </div>
              </>
          </div>
        </div>
        <img
          className="placeholder-image"
          alt="Placeholder image"
          src={placeholderImage}
        />
      </div>
    );
};

export default Header;

