import { Link } from "react-router-dom";
import "./portfolio.css";
import PropTypes from 'prop-types';


const Portfolio = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  // Function to truncate HTML content to a specified number of character
const truncateHtml = (html, maxLength) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    let text = doc.body.textContent || "";
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Default blogs when data is null or empty
  const defaultdest = [
    { _id:"#",
      title: "Default Destination 1",
      tags: ["Default Tag 1", "Default Tag 2"],
      content1: "Default content for Blog 1...",
      coverphoto: "/assets/image-7.png",
    },
    {_id:"#",
      title: "Default Destination 2",
      tags: ["Default Tag 1", "Default Tag 2"],
      content1: "Default content for Blog 2...",
      coverphoto: "/assets/placeholder-image-4.png",
    },
  ];

  return (
    <div id="portfolio" className={`portfolio breakpoint-13-desktop design-component-instance-node-3`}>
      <div className="section-title-2">
        <div className={`subheading-2 design-component-instance-node-2`}>Explore</div>
        <div className="content-5">
          <div className={`heading-2 design-component-instance-node-2`}>Discover Your Dream Destinations</div>
          <p className={`p design-component-instance-node-2`}>Find your next adventure with our curated selection</p>
        </div>
      </div>
      <div className="content-6">
        <div className="portfolio-list">
          {(data && data.length > 0 ? data : defaultdest).map((item, index) => (
            <div key={index} className="card-wrapper">
              <div className="cardhome">
              <img
  className="placeholder-image-2"
  alt="Placeholder image"
  src={(defaultdest[index].coverphoto)}
/>


                <div className="content-7">
                  <div className="content-8">
                    <Link to={`/article/${item._id}`} style={{ color: 'inherit', textDecoration: 'none', cursor:"pointer"}} ><div onClick={scrollToTop} className={`heading-3 design-component-instance-node-2`}>{item.title}</div></Link>
                    <div className="tags">
                      {item.tags && item.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className={`tag design-component-instance-node`}>
                          <div className={`text-wrapper-3 design-component-instance-node-2`}>{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="column-5">
                  <p className={`text-2 design-component-instance-node-2 temmii`} dangerouslySetInnerHTML={{ __html: truncateHtml(item.content1, 150) || 'Embark on an unforgettable journey to our mountain retreat. Experience thrilling adventures, conquer challenging hikes, and be rewarded with breathtaking scenic views.' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`style-secondary-wrapper design-component-instance-node-6`}>
          <div onClick={scrollToTop} className={`button-4 design-component-instance-node-2`}>
            <Link to={"/destinations"} style={{ color: 'inherit', textDecoration: 'none' }}>See All</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Portfolio.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Portfolio;
