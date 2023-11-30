import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./blogcarousel.css";


const Blogcarousel = ({ data }) => {
  const [text] = useState('Blogs');
  const [text1] = useState('Discover New Exciting Places');
  const [text2] = useState('Explore the latest blog posts and get inspired');

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
// Function to truncate HTML content to a specified number of characters
const truncateHtml = (html, maxLength) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  let text = doc.body.textContent || "";
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
const convertBase64ToImage = (base64String) => {
  return `${base64String}`;
};
const defaultBlogs = [
  {_id:"#",
    title: "Default Blog 1",
    tags: ["Default Tag 1", "Default Tag 2"],
    content1: "Default content for Blog 1...",
    image1: "/assets/placeholder-image-47.png",
  },
  {_id:"#",
    title: "Default Blog 2",
    tags: ["Default Tag 1", "Default Tag 2"],
    content1: "Default content for Blog 2...",
    image1: "/assets/placeholder-image-39.png",
  },
  { _id:"#",
    title: "Default Blog 3",
    tags: ["Default Tag 1", "Default Tag 2"],
    content1: "Default content for Blog 3...",
    image1: "/assets/placeholder-image-3.png",
  },
];

  return (
    <div id="blog" className={`blog breakpoint-33-desktop design-component-instance-node-5`}>
      <div className="section-title-3">
        <div className={`subheading-3 design-component-instance-node-2`}>{text}</div>
        <div className="content-11">
          <div className={`heading-5 design-component-instance-node-2`}>{text1}</div>
          <p className={`text-3 design-component-instance-node-2`}>{text2}</p>
        </div>
      </div>
      <div className="content-122">
        <div className="row-3">
          {(data && data.length > 0 ? data : defaultBlogs).map((item, index) => (
            <div key={index} className="card-2">

            <img
                className="placeholder-image-4"
                alt="Placeholder image"
                src={data && data.length > 0 ? convertBase64ToImage(item.coverphoto) : (item.image1 || defaultBlogs[index].image1)}
              />
              <div className="content-13">
                <div className="info">
                  <div className="container-3">
                    <div className={`text-4 design-component-instance-node-2`}>{ item.tags[0] || 'Blog'}</div>
                  </div>
                  <div className={`text-5 design-component-instance-node-2`}>{`${5+index} min read`}</div>
                </div>
                <div className="content-14">
                  <p className={`heading-6 design-component-instance-node-2`}>{item.title || "Exploring Local Cuisine: A Foodie's Delight"}</p>
                  <p className={`text-6 design-component-instance-node-2 temmii`} dangerouslySetInnerHTML={{ __html: truncateHtml(item.content1, 200) || 'Indulge in the flavors of different cultures with our food guide.' }} />
                </div>
              </div>
              <Link to={`/article/${item._id}`} style={{ color: 'inherit', textDecoration: 'none', cursor:"pointer" }}>
              <div  onClick={scrollToTop} className={`style-link-small-wrapper style-link-small-instance`}>
              
                <div className={`text-wrapper-4 design-component-instance-node-2`}>Read More</div>
                <svg
                  className={`icon-chevron-right-4 design-component-instance-node-5`}
                  fill="none"
                  height="24"
                  viewBox="0 0 25 24"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                        className="path"
                        clipRule="evenodd"
                        d="M21.23 7.12L21.09 6.87C20.9094 6.56769 20.6547 6.31643 20.35 6.14L13.64 2.27C13.3362 2.09375 12.9913 2.00062 12.64 2H12.35C11.9987 2.00062 11.6538 2.09375 11.35 2.27L4.64 6.15C4.33697 6.32526 4.08526 6.57697 3.91 6.88L3.77 7.13C3.59375 7.43384 3.50062 7.77874 3.5 8.13V15.88C3.50062 16.2313 3.59375 16.5762 3.77 16.88L3.91 17.13C4.08979 17.4295 4.34049 17.6802 4.64 17.86L11.36 21.73C11.6623 21.9099 12.0082 22.0033 12.36 22H12.64C12.9913 21.9994 13.3362 21.9063 13.64 21.73L20.35 17.85C20.656 17.6787 20.9087 17.426 21.08 17.12L21.23 16.87C21.4041 16.5653 21.4971 16.221 21.5 15.87V8.12C21.4994 7.76874 21.4063 7.42384 21.23 7.12ZM12.35 4H12.64L18.5 7.38L12.5 10.84L6.5 7.38L12.35 4ZM13.5 19.5L19.35 16.12L19.5 15.87V9.11L13.5 12.58V19.5Z"
                        fill={"#263339"}
                        fillRule="evenodd"
                    />
                </svg>
              </div></Link>
            </div>
          ))}
        </div>
        <div className={`style-secondary-wrapper design-component-instance-node-6 spd`}>
          <div onClick={scrollToTop} className={`button-4 design-component-instance-node-2`}>
            <Link to="/blogs" style={{ color: 'inherit', textDecoration: 'none' }}>
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Blogcarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Blogcarousel;
