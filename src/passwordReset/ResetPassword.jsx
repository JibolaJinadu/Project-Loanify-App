import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './resetPassword.css';
import businessGuy from '../login/img/business guy.png';
import logo from './loanifyLogo.svg';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateCode = (value) => {
    if (!value) {
      setCodeError('Please enter the code received from your email.');
    } else {
      const codeRegex = /^\d{4}$/;
      if (!codeRegex.test(value)) {
        setCodeError('Please enter valid code');
      } else {
        setCodeError('');
      }
    }
  };

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

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Please enter your password.');
    } else if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      setConfirmPasswordError('Please re-enter password.');
    } else if (value !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleCodeChange = (event) => {
    const { value } = event.target;
    setCode(value);
    validateCode(value);
  };
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    validatePassword(value);
    validateConfirmPassword(confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const formData = {
    code: parseInt(code, 10),
    email: email,
    password: password,
  };

  const submitForm = async () => {
    try {
      const response = await axios.post(
        `https://loanifyteama-production.up.railway.app/api/v1/auth/update-password`,
        formData
      );
      toast.success('Password changed successfully!');
      navigate('/reset-successful');
    } catch (error) {
      console.log(error);
      toast.error('Invalid Username or Password! Please try again.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate code
    validateCode(code);

    // Validate email
    validateEmail(email);

    // Validate password
    validatePassword(password);

    // Validate confirm password
    validateConfirmPassword(confirmPassword);

    const isCodeValid = code && !codeError;

    const isEmailValid = email && !emailError;

    const ispasswordValid = password && !passwordError;

    const isconfirmPasswordValid = confirmPassword && !confirmPasswordError;

    if (isCodeValid && isEmailValid && ispasswordValid) {
      submitForm();
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="resetPassword" id="resetPasswordContainer">
      <img src={businessGuy} alt="" className="resetImage" />
      <div className="formWrapper">
        <img src={logo} alt="" className="loanifyLogo" />
        <form className="resetPass-form" onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <div className="resetWrapper">
            <div className="textfield-wrapper">
              <TextField
                type="text"
                value={code}
                variant="standard"
                onChange={handleCodeChange}
                placeholder="Code"
                className="input"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {codeError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {codeError}
                </span>
              )}
            </div>
          </div>
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
            </div>
            <div className="textfield-wrapper">
              <TextField
                type={showPassword ? 'text' : 'password'}
                variant="standard"
                value={password}
                onChange={handlePasswordChange}
                placeholder="New Password"
                className="input"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {passwordError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {passwordError}
                </span>
              )}
            </div>
            {/* <div className="textfield-wrapper">
              <TextField
                type={showConfirmPassword ? 'text' : 'password'}
                variant="standard"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                className="input"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {confirmPasswordError && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {confirmPasswordError}
                </span>
              )}
            </div> */}
            <button type="submit" className="formButton">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResetPassword;
