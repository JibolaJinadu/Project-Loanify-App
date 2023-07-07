import React, { useContext, useState } from 'react';
import './token.css';
import BusinessGuy from './Assets/business-guy.png';
import Logo from './Assets/logo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext';

const Token = () => {
  const { signUpToken } = useContext(AuthContext);
  const [tokenDigits, setTokenDigits] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  console.log(`token ${signUpToken}`);

  const handleTokenChange = (index, event) => {
    const digit = event.target.value;

    if (digit.match(/^\d*$/)) {
      const updatedTokenDigits = [...tokenDigits];
      updatedTokenDigits[index] = digit;
      setTokenDigits(updatedTokenDigits);

      if (digit !== '' && index < tokenDigits.length - 1) {
        const nextInputField =
          event.target.parentElement.nextSibling.querySelector('input');

        if (nextInputField) {
          nextInputField.focus();
        }
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = tokenDigits.join('');

    if (token.trim() === '') {
      setErrorMessage('Please enter the token PIN.');
      return;
    }

    if (tokenDigits.some((digit) => digit === '')) {
      setErrorMessage('Please enter all the digits of the token PIN.');
      return;
    }

    try {
      // Send a request to the server to verify the token PIN
      const response = await axios.post(
        'https://loanifyteama-production.up.railway.app/api/v1/auth/verify-email/',
        { code: parseInt(token, 10) },
        {
          headers: {
            Authorization: `Bearer ${signUpToken}`,
          },
        }
      );
      navigate('/dashboard');
      toast.success('Login successfully');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.log(error);
    }

    setTokenDigits(['', '', '', '']);
  };

  return (
    <section className="main-container">
      <img src={BusinessGuy} alt="Business guy" className="business-guy-img" />
      <div className="page-content">
        <img src={Logo} alt="Logo" className="logo" />
        <form className="token-section" onSubmit={handleSubmit}>
          <div>
            <h6 className="page-prompt-hdr">
              Please enter your 4-digit token pin
            </h6>
          </div>

          <div className="token-field-container">
            {tokenDigits.map((digit, index) => (
              <div className="token-field-background" key={index}>
                <input
                  className="token-field"
                  type="text"
                  name="token"
                  maxLength="1"
                  value={digit}
                  onChange={(event) => handleTokenChange(index, event)}
                />
              </div>
            ))}
          </div>

          {errorMessage && (
            <div>
              <p className="error-message">{errorMessage}</p>
            </div>
          )}

          <div className="button-div">
            <button type="submit" className="submit-token-btn">
              Proceed to the Dashboard
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Token;
