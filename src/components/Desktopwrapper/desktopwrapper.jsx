// import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./desktopwrapper.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const Desktopwrapper = ({destinationsData}) => {
    const [destinationsDataTrim, setDestinationsDataTrim] = useState([]);

    useEffect(() => {
      setDestinationsDataTrim(destinationsData.slice(0, 3));
    }, [destinationsData]);


//functions
const scrollToTop = () => {
  window.scrollTo(0, 0)
}
const defaultBlogs = [
  {_id:"#",
    title: "Exploring Ancient Ruins",
    tags: ["Default Tag 1", "Default Tag 2"],
    content1: "Uncover the mysteries of ancient civilizations through these fascinating ruins.",
    coverphoto: "/assets/placeholder-image-47.png",
    author:{
      Name:"Yash Pachauri",
      profilepic:"/assets/placeholder-image-35.png",
      createdAt:"11 Jan 2022"
    }
  },
  {_id:"#",
    title: "Exploring Ancient Ruins",
    tags: ["Default Tag 1", "Default Tag 2"],
    content1: "Uncover the mysteries of ancient civilizations through these fascinating ruins.",
    coverphoto: "/assets/placeholder-image-41.png",
    author:{
      Name:"Yash Pachauri",
      profilepic:"/assets/placeholder-image-35.png",
      createdAt:"11 Jan 2022"
    }
  },
  {_id:"#",
    title: "Exploring Ancient Ruins",
    tags: ["Default Tag 1", "Default Tag 2"],
    content1: "Uncover the mysteries of ancient civilizations through these fascinating ruins.",
    coverphoto: "/assets/placeholder-image-3.png",
    author:{
      Name:"Yash Pachauri",
      profilepic:"/assets/placeholder-image-35.png",
      createdAt:"11 Jan 2022"
    }
  },
];
 // Function to truncate HTML content to a specified number of characters
 const truncateHtml = (html, maxLength) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  let text = doc.body.textContent || "";
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};


    
    return (
        <div className={`breakpoint-desktop-wrapper breakpoint-28-desktop design-component-instance-node-5`}>
      <div className="section-title-2">
        <div className={`subheading-2 design-component-instance-node-4`}>Adventure</div>
        <div className="content-7">
          <div className={`heading-7 design-component-instance-node-4`}>Explore the World&#39;s Wonders</div>
          <p className={`text-3 design-component-instance-node-4`}>Discover amazing destinations and travel stories</p>
        </div>
      </div>
      <div className="content-8">
     
        <div className="row-4">
        {(destinationsDataTrim && destinationsDataTrim.length > 0 ? destinationsDataTrim : defaultBlogs).map((item, index) => (
        <div key={index} className="card-2">
            <img
              className="placeholder-image-9"
              alt="Placeholder image"
              src={item.coverphoto || defaultBlogs[index].coverphoto}
            />
            <div className="content-9">
              <div className={`text-4 design-component-instance-node-33`}>{item.tags[0]}</div>
              <Link to={`/article/${item._id}`} style={{ color: 'inherit', textDecoration: 'none', cursor:"pointer"}} ><p onClick={scrollToTop} className={`heading-8 blog-37`}>{item.title}</p></Link>
              <p className={`text-5 blog-37`} dangerouslySetInnerHTML={{ __html: truncateHtml(item.content1, 100) || 'Indulge in the flavors of different cultures with our food guide.' }} />
            </div>
            <div className="avatar-2">
              <img className="placeholder-image-8  author-image" alt="Placeholder image" src={item.author.profilepic || "/assets/placeholder-image-35.png"} />
              
              <div className="content-10">
                <div className={`text-4 `}>{item.author.Name}</div>
                <div className="time-2">
                  <div className={`text-6 `}>{item.createdAt}</div>
                  <div className={`text-wrapper-7 `}>•</div>
                  <div className={`text-6 `}>{`${5 + index} min Read`}</div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className={`style-secondary blog-37-instance`}>
            <div onClick={scrollToTop} className={`button-3 design-component-instance-node-4`}><Link to={"/destinations"} style={{ color: 'inherit', textDecoration: 'none' }}>Explore</Link></div>
        </div>
      </div>
    </div>
    );
};
Desktopwrapper.propTypes = {
  destinationsData: PropTypes.array,
};
export default Desktopwrapper;

