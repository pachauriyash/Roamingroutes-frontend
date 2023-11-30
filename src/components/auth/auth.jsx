import { useState, useEffect } from 'react';
import './auth.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { redirect } from 'react-router-dom';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Auth = ({setIsLoggedIn, setuserdata}) => {

  const [formStatus, setFormStatus] = useState('Sign Up');
  const [authent, setAuthent] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [showPasswordNote, setShowPasswordNote] = useState(false);
  const [base64Image, setBase64Image] = useState('');
 

     // Function to convert a file to base64 Data URL
     const fileToBase64 = (file, callback) => {
      if (file instanceof Blob || file instanceof File) {
        const reader = new FileReader();
        reader.onloadend = () => {
          callback(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Invalid file type');
        callback(null);
      }
    };



const onFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    fileToBase64(file, (result) => {
      setBase64Image(result);

    });
  }
};

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(confirmPassword.length>0 && password === confirmPassword);
}, [password, confirmPassword]);

const onPasswordChange = (e) => {
    setPassword(e.target.value);
    // Show password note only when the user types a password
    setShowPasswordNote(e.target.value.length > 0);
  };

  


// ...



const onSubmit = async (e) => {
    e.preventDefault();

    // For Sign Up
    if (authent === 'Sign Up') {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            setFormStatus('Sign Up');
            return;
        }
        setFormStatus('Signing Up...');
        try {
            const response = await axios.post(`${import.meta.env.VITE_YOUR_ENDPOINT}/signup`, {
                Name: name,
                username: email,
                password,
                profilepic: base64Image,
            });

            console.log(response.data); // Handle success
            setuserdata(response.data);
            setAuthent('Sign In');
            setFormStatus('Sign In');
        } catch (error) {
            console.error(error); // Handle error
        }
    } else {
        // For Sign In
        setFormStatus('Logging In...');
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_YOUR_ENDPOINT}/login`,
                {
                    username: email,
                    password: password,
                },
                { withCredentials: true }
            );
            // console.log(response.data)
            setuserdata(response.data);
            setIsLoggedIn(true);
            redirect('/');
        } catch (error) {
            console.error(error); // Handle error
        }
    }
};


const toggleAuth = () => {
    setAuthent(authent === 'Sign Up' ? 'Sign In' : 'Sign Up');
    setFormStatus(authent === 'Sign Up' ? 'Sign In' : 'Sign Up');
    setPassword('');
    setConfirmPassword('');
    setProfilePic('');
};
  return (
    <div className="container2">
      <div className="formheading">
        <div className="content-88">
          <div className={`headingg-3 `}>{authent}</div>
        </div>
      </div>
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          {authent === 'Sign Up' && (
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="md-form mb-0">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              required
            />
            {!validPassword && showPasswordNote && (
              <div className="password-note">
              8 to 24 characters, Must include uppercase and lowercase letters, a number and a special character <br/>
              Allowed special characters: ! @ # $ %
              </div>
            )}
          </div>
          {authent === 'Sign Up' && (
            <>
              <div className="mb-3 ">
              <div className='specialtemp'>
                <div className='temp'>
                <label className="form-label" htmlFor="confirmPassword">
                  Confirm Password
                  
                </label></div>
                <div className='icon-temp'>
                {!validMatch && confirmPassword.length>0 && 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#263339" width="24" height="24">
  <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.293 15.293a1 1 0 0 1-1.414 0L12 13.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1 0 1.414z"/>
</svg>



                 }
                {validMatch && 
                    <svg className={`icon-check-6 design-component-instance-node-5`} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
  <path className="path" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#263339" />
</svg>

                }</div>
                </div>
                <input
                  className="form-control"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="profilePic">
                  Profile Picture
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="profilePic"
                  value={profilePic}
                  onChange={(e) => {setProfilePic(e.target.value); onFileChange(e);} }
                  required
                />
              </div>
            </>
          )}
          <div className="xyz">
            <button className="btn btn-dark specialbtn" onClick={toggleAuth}>
              {authent === 'Sign Up'
                ? 'Already a User? Sign In'
                : 'Wanna Join? Sign Up'}
            </button>
            <button className="btn btn-dark specialbtn" type="submit">
              {formStatus}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Auth.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
    setuserdata: PropTypes.func,
  };
export default Auth;