import React, { useContext, useState } from 'react';
import './login.css';
import businessGuy from './img/business guy.png';
import logo from './img/LOANIFY logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import { AuthContext } from '../AuthContext';

function Login() {
  const { loginToken, setLoginToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const submitForm = async () => {
    try {
      const response = await axios.post(
        `https://loanifyteama-production.up.railway.app/api/v1/auth/login/`,
        formData,
        {
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      Cookies.set('loginToken', response.data.token, { expires: 7 });
      setLoginToken(response.data.token);
      toast.success('login successfully');
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast.error('Invalid Username or Password! Please try again.');
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    if (!formData.password) {
      setErrors({
        password: 'Password is required',
      });
      isValid = false;
    }
    if (!formData.email) {
      setErrors({
        email: 'Email is required',
      });
      isValid = false;
    }

    if (isValid) {
      submitForm();
    }
  }

  return (
    <section className="login">
      <img src={businessGuy} alt="Business Guy" className="login-img" />
      <div className="form-wrapper">
        <img src={logo} alt="Loanify Logo" />
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Welcome Back</h1>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              className="form-input"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (e.target.value === '') {
                  setErrors({
                    ...errors,
                    email: 'Please enter your email address',
                  });
                } else if (
                  !event.target.value.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
                ) {
                  setErrors({
                    ...errors,
                    email: 'Please enter a valid email address.',
                  });
                } else {
                  setErrors({
                    ...errors,
                    email: '',
                  });
                }
              }}
            />
            {errors.email && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.email}
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="form-input"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (e.target.value === '') {
                  setErrors({
                    ...errors,
                    password: 'Please enter password',
                  });
                } else if (e.target.value.length < 8) {
                  setErrors({
                    ...errors,
                    password: 'Password must be atleast 8 characters long',
                  });
                } else {
                  setErrors({
                    ...errors,
                    password: '',
                  });
                }
              }}
            />
            <span className="login-password" onClick={togglePasswordVisibility}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </span>
            {errors.password && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.password}
              </span>
            )}
            <Link to="/forgot-password" className="pass">
              Forget password?
            </Link>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-blue">
              Log In
            </button>
          </div>
          <p className="team">
            Join the team ?{' '}
            <Link to="/sign-up" className="sign">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
