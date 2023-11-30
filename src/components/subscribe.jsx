import  { useState } from "react";
import axios from 'axios';
import "./subscribe.css";
function Subscribe() {
  const [email, setEmail] = useState('');
  const handleSubscribe = async () => {
    try {
      // Make a POST request to your server's subscribe route
      const response = await axios.post( `${import.meta.env.VITE_YOUR_ENDPOINT}/subscribe`, {  email: email });

      // Check if the request was successful
      if (response.status === 200) {
        alert('Subscribed to the mailing list successfully!');
        // You can also redirect or perform any other action upon successful subscription
        setEmail('');
      } else {
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };
  return (
    
    <div className="CTA">
            <div className="container-5">
              <div className="content-18">
                <p className="heading-9">Get Travel Tips and Updates</p>
                <p className="text-7">Subscribe to our newsletter for the latest travel updates</p>
              </div>
              <div className="actions-4">
                <div className="form">
                <input onChange={(e)=>{setEmail(e.target.value)}} className="type-default type-default-instance" value={email} type="email" id="email" required />
                <div className={`div-wrapper style-primary-small-instance`}>
                     <div className={`text-wrapper-6 style-primary-small-false-dark-mode-false-icon-position-no-icon-instance`} onClick={handleSubscribe}>Submit</div>
                </div>
                </div>
                <p className="by-clicking-sign-up">By joining, you agree to our Terms and Conditions</p>
              </div>
            </div>
    </div>
  );
}

export default Subscribe;
