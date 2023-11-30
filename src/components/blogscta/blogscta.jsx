// import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./blogscta.css";

const Blogscta = () => {
  

    const stylePrimarySmallWrapperText="Submit";
    const styleSecondaryText="Suggest";
    const text="Share your travel stories here";
    const text1="Contribute a guest post and inspire fellow travelers";
//functions
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
    
    return (
        <div className={`CTA breakpoint-62-desktop design-component-instance-node-5`}>
        <div className="container-4">
          <div className="content-15">
              <div className="row-5">
                <p className={`heading-99 `}>{text}</p>
                <p className={`text-10`}>{text1}</p>
              </div>
            
          </div>
          <div className="actions-2">
            <div className={`style-primary-small-wrapper CTA-7`}>
                <div onClick={scrollToTop} className={`button-5 CTA-instance`}><Link to={"/publisharticle"} style={{ color: 'inherit', textDecoration: 'none' }}>{stylePrimarySmallWrapperText}</Link></div>
            </div>
            <div className={`style-secondary CTA-7-instance`}>
                <div onClick={scrollToTop} className={`button-3`}><Link to={"/contactus"} style={{ color: 'inherit', textDecoration: 'none' }}>{styleSecondaryText}</Link></div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Blogscta;

