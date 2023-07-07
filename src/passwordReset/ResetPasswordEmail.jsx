import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import businessGuy from '../login/img/business guy.png';
import logo from './loanifyLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ResetPasswordEmail() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Please enter your email.');
    } else {
      // Email validation using regex
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const submitEmail = async () => {
    try {
      const response = await axios.post(
        `https://loanifyteama-production.up.railway.app/api/v1/auth/reset-password`,
        { email: email }
      );
      toast.success('A code has been sent to your email.');
      navigate('/submit-password');
    } catch (error) {
      console.log(error);
      toast.error('Invalid username! Please try again.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateEmail(email);

    const isEmailValid = email && !emailError;

    if (isEmailValid) {
      submitEmail();
    }
  };

  return (
    <section className="resetPassword">
      <img src={businessGuy} alt="" className="resetImage" />
      <div className="formWrapper">
        <img src={logo} alt="" className="loanifyLogo" />
        <form className="resetPass-form" onSubmit={handleSubmit}>
          <h1>Forgot Password?</h1>
          <div className="resetWrapper">
            <div className="textfield-wrapper">
              <TextField
                type="email"
                value={email}
                variant="standard"
                onChange={handleEmailChange}
                placeholder="Email Address"
                className="input"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {emailError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {emailError}
                </span>
              )}
              <p className="TokenToBeSent">
                Reset token will be sent to your email
              </p>
            </div>
            <button type="submit" className="formButton">
              Submit
            </button>
            <Link to="/resend-token">
              <p className="ResendTokenText">Resend token</p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
