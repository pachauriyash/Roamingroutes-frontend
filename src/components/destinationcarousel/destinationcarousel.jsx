import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./destinationcarousel.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Arrow(props){
  const {className, style, onClick} = props;
  return(
    <div
    className={className}
    style={{...style, display: "block",background:"grey"}}
    onClick={onClick}
    />
  )
}
Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func, // Add this line to specify that onClick is required
};

const Destinationcarousel = ({destinationsData}) => {
    // console.log("destinationsData", destinationsData);


   
    const text = "Explore";
    const text1 = "Discover Amazing Destinations";
    const text2 = "Browse through our collection of breathtaking destinations.";

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    let blocked = false;
let blockTimeout = null;
let prevDeltaY = 0;
    const handleWheel = (e) => {
      let deltaY = e.originalEvent.deltaY;
    e.preventDefault();
    e.stopPropagation();

    clearTimeout(blockTimeout);
    blockTimeout = setTimeout(function(){
        blocked = false;
    }, 50);

    
    if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
        blocked = true;
        prevDeltaY = deltaY;

        if (deltaY > 0) {
            Slider.slick('slickNext');
        } else {
            Slider.slick('slickPrev');
        }
    }
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Number of slides to show at a time
      slidesToScroll: 1, // Number of slides to scroll at a time
      responsive:[
        {
          breakpoint: 1024,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      onWheel: handleWheel, // Add this line to handle the wheel event
    };
    

    const defaultBlogs = [
      { _id:"#",
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
      { _id:"#",
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
      { _id:"#",
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
    ];
// Function to truncate HTML content to a specified number of characters
const truncateHtml = (html, maxLength) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  let text = doc.body.textContent || "";
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

return (
            <div id={"alldestinations"} className={`blog breakpoint-33-desktop design-component-instance-node-5`}>
            <div className="section-title-3">
              <div className={`subheading-3 design-component-instance-node-2`}>{text}</div>
              <div className="content-11">
                <div className={`heading-5 design-component-instance-node-2`}>{text1}</div>
                <p className={`text-3 design-component-instance-node-2`}>{text2}</p>
              </div>
            </div>
            <div className="container">
            <Slider {...settings}>
            {(destinationsData && destinationsData.length > 0 ? destinationsData : defaultBlogs).map((item, index) => (
              <div key={index} className="card">
              <img
                    className="placeholder-image-4"
                    alt="Placeholder image"
                    src={item.coverphoto || (index <4 && defaultBlogs[index].coverphoto) || "/assets/placeholder-image-47.png"}
                  />
                  <div className="content-13">
                  <div className="info">
                {item.tags && item.tags.length > 0 && (
                  <div className="container-3">
                    {item.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className={`text-4 design-component-instance-node-2`} style={{ marginRight: '10px',backgroundColor: "#f4f4f4" }}>
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>
                    <div className="content-14">
                      <p className={`heading-6 design-component-instance-node-2`}>{item.title}</p>
                      <p className={`text-6 design-component-instance-node-2`} dangerouslySetInnerHTML={{ __html: truncateHtml(item.content1, 100) || 'Indulge in the flavors of different cultures with our food guide.' }} />
                    </div>
                  </div>
                  <Link to={`/article/${item._id}`} style={{ color: 'inherit', textDecoration: 'none', cursor:"pointer"}} >
                  <div onClick={scrollToTop} className={`style-link-small-wrapper style-link-small-instance`}>
                 
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
            </Slider>
            </div>

            </div>
);
};
Destinationcarousel.propTypes = {
  destinationsData: PropTypes.array,
};
export default Destinationcarousel;