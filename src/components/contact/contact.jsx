import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"


const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
  setFormStatus('Sending...');
  emailjs.sendForm(
    import.meta.env.VITE_YOUR_SERVICE_ID,
    import.meta.env.VITE_YOUR_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_YOUR_PUBLIC_KEY
  )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setFormStatus('Sent');
    form.current.reset();
};

  return (
    <div className="container2">
    <div className="formheading">
        <div className={`tagline `}>Get in Touch</div>
        <div className="content-88">
          <div className={`headingg-3 `}>Contact Us</div>
          <p className={`pp`}>Have a question or need assistance? Fill out the form below.</p>
        </div>
    </div>
    <div className="container mt-5">

      <form  ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
        
          <label className="form-label" htmlFor="user_name">
            Name
          </label>
          <input className="form-control" type="text" name="user_name" id="user_name" required />
        </div>
        <div className="md-form mb-0">
          <label className="form-label" htmlFor="user_email">
            Email
          </label>
          <input className="form-control" type="email" name="user_email"  id="user_email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" id="message" rows={5} required />
        </div>
        <div className='xyz'>
        <button className="btn btn-dark" type="submit">
          {formStatus}
        </button>
        </div>
       
      </form>
    </div>
    </div>
  )
}
export default ContactForm