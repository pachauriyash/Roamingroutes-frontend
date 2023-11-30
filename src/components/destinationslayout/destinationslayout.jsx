// import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./destinationslayout.css";
import { Link } from 'react-router-dom';
const Destinationslayout = () => {
    const placeholderImage = "/assets/placeholder-image-2.png";
    

    return (
        <div className={`layout breakpoint-3-desktop design-component-instance-node-2`}>
        <div className="container-2">
          <div className="content-3">
            <div className="content-4">
              <div className="section-title">
                <div className={`subheading `}>Discover</div>
                <div className="content-5">
                  <p className={`heading `}>Explore Our Featured Travel Destination</p>
                  <p className={`text design-component-instance-node-3 destlayout-text`}>Get ready for an unforgettable journey as we take you on a virtual tour of one of the most breathtaking travel destinations in the world. From stunning landscapes to vibrant cultures, this destination has it all.</p>
                </div>
              </div>
              <div className="list">
                <div className="list-item">
                  <div className={`subheading-one `}>Experience</div>
                  <p className={`p design-component-instance-node-3 destlayout-text`}>Immerse yourself in the rich history and natural beauty of the extraordinary place.</p>
                </div>
                <div className="list-item-2">
                  <div className={`subheading-two `}>Discover</div>
                  <p className={`p design-component-instance-node-3 destlayout-text`}>Hidden gems and secret spots that will leave you in awe.</p>
                </div>
              </div>
            </div>
            <div className="actions-2">
                <div className={`style-secondary layout-4"`}>
                    <div className={`button-2 `}>
                    <a href={'#alldestinations'} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Learn More
                      </a>
                    </div>
                </div>
                <div className={`style-link-small style-link-small-false-dark-mode-false-icon-position-trailing`}>
                <Link to={`/auth`} style={{ color: 'inherit', textDecoration: 'none', cursor:"pointer" }}><div className={`button-3 `}>Sign Up</div></Link>
                    <svg className={`icon-relume-1 icon-chevron-right`} fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path className="path" clipRule="evenodd"  d="M20.73 7.62L20.59 7.37C20.4094 7.06769 20.1547 6.81643 19.85 6.64L13.14 2.77C12.8362 2.59375 12.4913 2.50062 12.14 2.5H11.85C11.4987 2.50062 11.1538 2.59375 10.85 2.77L4.14 6.65C3.83697 6.82526 3.58526 7.07697 3.41 7.38L3.27 7.63C3.09375 7.93384 3.00062 8.27874 3 8.63V16.38C3.00062 16.7313 3.09375 17.0762 3.27 17.38L3.41 17.63C3.58979 17.9295 3.84049 18.1802 4.14 18.36L10.86 22.23C11.1623 22.4099 11.5082 22.5033 11.86 22.5H12.14C12.4913 22.4994 12.8362 22.4063 13.14 22.23L19.85 18.35C20.156 18.1787 20.4087 17.926 20.58 17.62L20.73 17.37C20.9041 17.0653 20.9971 16.721 21 16.37V8.62C20.9994 8.26874 20.9063 7.92384 20.73 7.62ZM11.85 4.5H12.14L18 7.88L12 11.34L6 7.88L11.85 4.5ZM13 20L18.85 16.62L19 16.37V9.61L13 13.08V20Z"
                    fill="#263339"    fillRule="evenodd"/>
                    </svg>
                </div>
            </div>
          </div>
          <img className="placeholder-image" alt="Placeholder image" src={placeholderImage}/>
        </div>
      </div>
    );
};

export default Destinationslayout;

