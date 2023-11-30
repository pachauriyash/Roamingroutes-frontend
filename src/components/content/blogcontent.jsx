// import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./blogcontent.css";
import PropTypes from "prop-types";
import { Link} from 'react-router-dom';
const Blogcontent = ({articledata,userdata}) => {

  async function copyToClip() {
    try {
      await navigator.clipboard.writeText(location.href);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard. Error:", err);
      alert("Failed to copy link to clipboard. Please try again.");
    }
  }

    return (
      <div className={`content breakpoint-5-desktop design-component-instance-node-4`}>
      <div className="frame">
        <div className="div-2">
          <div className="rich-text2">
            <div className="div-wrapper-2">
              <div className={`text-wrapper-4 `}>{articledata.heading1}</div>
            </div>
            <div className="div-wrapper-3">
              <p className={`p `} dangerouslySetInnerHTML={{ __html: articledata.content1}} />
            </div>
            {articledata.image1 && <div className="div-5">
              <img
                className="placeholder-image"
                alt="Placeholder image"
                src={articledata.image1}
              />

            </div>}
            {articledata.content2 && articledata.content2.length>2 && <div className="div-wrapper-3">
              <p className={`p `} dangerouslySetInnerHTML={{ __html: articledata.content2}} />
            </div>}
            {articledata.heading2 && <div className="div-wrapper-5">
              <div className={`text-wrapper-7 `}>{articledata.heading2}</div>
            </div>}
            {articledata.content3 && articledata.content3.length>2 && <div className="div-wrapper-3">
            <p className={`p `} dangerouslySetInnerHTML={{ __html: articledata.content3}} />
            </div>}
          </div>
        </div>
        <div className="div-7">
          <div className="social">
            <div className={`share-this-post `}>{"Share this Article"}</div>
            <div className="div-4">
              <div onClick={copyToClip} style={{ cursor: 'pointer' }} className={`share-button content-30`}>
              <svg className={`icon-link-alt-4 design-component-instance-node-4`} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path className="path" d="M4.22172 19.778C4.68559 20.2425 5.23669 20.6108 5.84334 20.8617C6.44999 21.1126 7.10023 21.2411 7.75672 21.24C8.41335 21.2411 9.06374 21.1125 9.67054 20.8617C10.2774 20.6108 10.8286 20.2425 11.2927 19.778L14.1207 16.949L12.7067 15.535L9.87872 18.364C9.31519 18.925 8.55239 19.2399 7.75722 19.2399C6.96205 19.2399 6.19925 18.925 5.63572 18.364C5.07422 17.8007 4.75892 17.0378 4.75892 16.2425C4.75892 15.4471 5.07422 14.6842 5.63572 14.121L8.46472 11.293L7.05072 9.87896L4.22172 12.707C3.28552 13.6454 2.75977 14.9169 2.75977 16.2425C2.75977 17.568 3.28552 18.8395 4.22172 19.778ZM19.7777 11.293C20.7134 10.3542 21.2388 9.08288 21.2388 7.75746C21.2388 6.43204 20.7134 5.16068 19.7777 4.22196C18.8393 3.28577 17.5678 2.76001 16.2422 2.76001C14.9166 2.76001 13.6452 3.28577 12.7067 4.22196L9.87872 7.05096L11.2927 8.46496L14.1207 5.63596C14.6842 5.07495 15.447 4.75999 16.2422 4.75999C17.0374 4.75999 17.8002 5.07495 18.3637 5.63596C18.9252 6.19923 19.2405 6.96213 19.2405 7.75746C19.2405 8.55279 18.9252 9.31569 18.3637 9.87896L15.5347 12.707L16.9487 14.121L19.7777 11.293ZM8.46371 16.95L7.04871 15.536L15.5357 7.05005L16.9497 8.46505L8.46371 16.95Z"
              fill="#263339"/>
              <path className="path" d="M4.22172 19.778C4.68559 20.2425 5.23669 20.6108 5.84334 20.8617C6.44999 21.1126 7.10023 21.2411 7.75672 21.24C8.41335 21.2411 9.06374 21.1125 9.67054 20.8617C10.2774 20.6108 10.8286 20.2425 11.2927 19.778L14.1207 16.949L12.7067 15.535L9.87872 18.364C9.31519 18.925 8.55239 19.2399 7.75722 19.2399C6.96205 19.2399 6.19925 18.925 5.63572 18.364C5.07422 17.8007 4.75892 17.0378 4.75892 16.2425C4.75892 15.4471 5.07422 14.6842 5.63572 14.121L8.46472 11.293L7.05072 9.87896L4.22172 12.707C3.28552 13.6454 2.75977 14.9169 2.75977 16.2425C2.75977 17.568 3.28552 18.8395 4.22172 19.778ZM19.7777 11.293C20.7134 10.3542 21.2388 9.08288 21.2388 7.75746C21.2388 6.43204 20.7134 5.16068 19.7777 4.22196C18.8393 3.28577 17.5678 2.76001 16.2422 2.76001C14.9166 2.76001 13.6452 3.28577 12.7067 4.22196L9.87872 7.05096L11.2927 8.46496L14.1207 5.63596C14.6842 5.07495 15.447 4.75999 16.2422 4.75999C17.0374 4.75999 17.8002 5.07495 18.3637 5.63596C18.9252 6.19923 19.2405 6.96213 19.2405 7.75746C19.2405 8.55279 18.9252 9.31569 18.3637 9.87896L15.5347 12.707L16.9487 14.121L19.7777 11.293ZM8.46371 16.95L7.04871 15.536L15.5357 7.05005L16.9497 8.46505L8.46371 16.95Z"
              fill="#263339"/>
              </svg>
              </div>
              <div className={`share-button content-30`}>
              <svg className={`icon-linkedin-1 design-component-instance-node-4`} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path className="path" clipRule="evenodd" d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
              fill="#263339" fillRule="evenodd"/>
              </svg>
              </div>
              <div className={`share-button content-30`}>
              <svg className={`icon-x-6 design-component-instance-node-4`} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path className="path" d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z"
                fill="#263339"/>
              </svg>
              </div>
              <div className={`share-button content-30`}>
                <svg className={`icon-instagram-3 design-component-instance-node-4`}  fill="none"  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path className="path" clipRule="evenodd"
                  d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                  fill="#263339" fillRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="div-4">
          {articledata.tags && articledata.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className={`tag content-30`}>
                          <div className={`text-wrapper-8 `}>{tag}</div>
                        </div>
                      ))}
          </div>
          <div className={`divider content-instance`} />
          <div className="avatar">
            <img
              className="placeholder-image-2  author-image"
              alt="Placeholder image"
              src={articledata.author.profilepic || "/assets/placeholder-image-35.png"}
            />
            <div className="div-8">
              <div className={`full-name `}>{articledata.author.Name}</div>
              <div className={`job-title-company `}>{articledata.author.username}</div>
            </div>
          </div>
          
          {userdata!=null && articledata.author._id==userdata._id && 
            <div className='xyz'><Link to={`/editarticle/${articledata._id}`} style={{ color: 'inherit', textDecoration: 'none' , cursor:"pointer"}}>
            <div className="btn btn-dark" >Edit Blog?</div></Link>
          </div>
          }
         
        </div>
      </div>
    </div>
    );
};
Blogcontent.propTypes = {
  articledata: PropTypes.object,
  userdata: PropTypes.object,
};
export default Blogcontent;

