import React, { useState } from 'react';
import './index.css';  // Assuming styles are stored in Signup.css
import SurveyPic from '../../assets/survey-pic.png'
import {useHistory} from 'react-router-dom'

const Signup = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    directorate: '',
    team: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  // const directorateOptions = [
  //   "Asset Strategy & Capital Delivery",
  //           "Customer Delivery",
  //           "Customer Experience ",
  //           "Finance and Business Services",
  //           "General Management",
  //           "Health & Safety",
  //           "Technology & Transformation",
  //           "People",
  //           "Regulation & Strategy"
  // ];

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate email format
  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email address.' });
    } else {
      setErrors({ email: '' });
    }
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    validateEmail();
    if (!errors.email) {
      await localStorage.setItem('leadTheWayEmail',formData.email)
    }
history.push('/dashboard')
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
      <div style={{display:'flex', justifyContent:'center'}}><img src={SurveyPic} alt='survey' style={{borderRadius:'7px',width: '120px', height:'120px'}}/></div> 

        {/* Directorate Dropdown */}
        {/* <div className="form-group">
          <label htmlFor="directorate">Directorate</label>
          <select
            id="directorate"
            name="directorate"
            value={formData.directorate}
            onChange={handleChange}
            required
          >
            <option value="">Select a directorate</option>
            {directorateOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div> */}

        {/* Team Input */}
        {/* <div className="form-group">
          <label htmlFor="team">Team</label>
          <input
            type="text"
            id="team"
            name="team"
            placeholder="Enter your team name"
            value={formData.team}
            onChange={handleChange}
            required
          />
        </div> */}

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onBlur={validateEmail}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Submit Button */}
        <div className="submit-login-container ">
          <button type="submit" className="submit-button">Sign Up</button>
          <a href="/login" className="login-link">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
