import { Link } from "react-router-dom";
import "./blogsheader.css";
import PropTypes from 'prop-types';

const Blogsheader = ({ data }) => {

  // Default blogs when data is null or empty
  const defaultBlogs = [
    { _id:"#",
      title: "Blog 1",
      tags: ["Blog Tag 1", "Blog Tag 2"],
      content1: "Learn valuable tips and tricks for traveling on a budget without compromising on experiences.",
      coverphoto: "/assets/placeholder-image-47.png",
      author:{
        Name:"Yash Pachauri",
        profilepic:"/assets/placeholder-image-35.png",
        createdAt:"11 Jan 2022"
      }
    },
    { _id:"#",
      title: "Blog 2",
      tags: ["Blog Tag 1", "Blog Tag 2"],
      content1: "Learn valuable tips and tricks for traveling on a budget without compromising on experiences.",
      coverphoto: "/assets/placeholder-image-53.png",
      author:{
        Name:"Yash Pachauri",
        profilepic:"/assets/placeholder-image-35.png",
        createdAt:"11 Jan 2022"
      }
    },
    { _id:"#",
      title: "Blog 3",
      tags: ["Blog Tag 1", "BlogTag 2"],
      content1: "Learn valuable tips and tricks for traveling on a budget without compromising on experiences.",
      coverphoto: "/assets/placeholder-image-43.png",
      author:{
        Name:"Yash Pachauri",
        profilepic:"/assets/placeholder-image-35.png",
        createdAt:"11 Jan 2022"
      }
    },
    { _id:"#",
      title: "Blog 4",
      tags: ["Blog Tag 1", "BlogTag 2"],
      content1: "Learn valuable tips and tricks for traveling on a budget without compromising on experiences.",
      coverphoto: "/assets/placeholder-image-37.png",
      author:{
        Name:"Yash Pachauri",
        profilepic:"/assets/placeholder-image-35.png",
        createdAt:"11 Jan 2022"
      }
    },
    { _id:"#",
      title: "Blog 5",
      tags: ["Blog Tag 1", "BlogTag 2"],
      content1: "Learn valuable tips and tricks for traveling on a budget without compromising on experiences.",
      coverphoto: "/assets/placeholder-image-45.png",
      author:{
        Name:"Yash Pachauri",
        profilepic:"/assets/placeholder-image-35.png",
        createdAt:"11 Jan 2022"
      }
    },
    { _id:"#",
      title: "Blog 6",
      tags: ["Blog Tag 1", "BlogTag 2"],
      content1: "Learn valuable tips and tricks for traveling on a budget without compromising on experiences.",
      coverphoto: "/assets/placeholder-image-51.png",
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
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

  return (
    <div className={`blog breakpoint-desktop design-component-instance-node-2`}>
      <div className={`section-title blog-1`}>
        <div className={`subheading blog-instance`}>Latest</div>
        <div className="content-2">
          <div className={`heading blog-instance`}>Discover New Travel Destinations</div>
          <p className={`text blog-instance`}>Explore the most popular and exciting travel blogs.</p>
        </div>
      </div>
      <div className="content-3">
        {/* <div className="categories">
          <button className={`view-all-wrapper blog-1-instance`}>
            <div className={`text-wrapper-3 design-component-instance-node-3`}>See all</div>
          </button>
          <button className="button-2">
            <div className={`text-wrapper-3 design-component-instance-node-3`}>Adventure</div>
          </button>
          <button className="button-2">
            <div className={`text-wrapper-3 design-component-instance-node-3`}>Food</div>
          </button>
          <button className="button-2">
            <div className={`text-wrapper-3 design-component-instance-node-3`}>Culture</div>
          </button>
          <button className="button-2">
            <div className={`text-wrapper-3 design-component-instance-node-3`}>Nature</div>
          </button>
        </div> */}

  <div className="content-4">
    {(data && data.length > 0 ? data : defaultBlogs).map((item, index) => (

      <div key={index} className={`blog-card  card-2 }`}>
        <img
          className={`card-image ${index % 2 === 0 ? "placeholder-image-2" : "placeholder-image-3"}`}
          alt="Placeholder image"
          src={item.coverphoto || (index <6 && defaultBlogs[index].coverphoto) || "/assets/placeholder-image-47.png"}
        />
        <div className="content-5">
          <div className={`text-wrapper-4 design-component-instance-node-4`}>{item.tags[0]}</div>
          <Link to={`/article/${item._id}`} style={{ color: 'inherit', textDecoration: 'none', cursor:"pointer"}} ><p onClick={scrollToTop} className={`heading-2 design-component-instance-node99`}>{item.title}</p></Link>
          <p className={`text-2 design-component-instance-node-3`} dangerouslySetInnerHTML={{ __html: truncateHtml(item.content1, 200) || 'Indulge in the flavors of different cultures with our food guide.' }} />
        </div>
        <div className="avatar">
          <img
            className="img author-image"
            alt="Profile"
            src={item.author.profilepic || "/assets/placeholder-image-35.png"}
          />
          <div className="content-6">
            <div className={`text-wrapper-4 `}>{item.author.Name}</div>
            <div className="time">
              <div className={`text-wrapper-5 `}>{item.createdAt}</div>
              <div className={`text-wrapper-6 `}>•</div>
              <div className={`text-wrapper-5 `}>{`${5 + index} min Read`}</div>
            </div>
          </div>
        </div>
      </div>

    ))}
  </div>


      </div>
    </div>
  );
};

Blogsheader.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Blogsheader;
