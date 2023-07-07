import React from 'react';
import logo from './Assets/LOANIFY logo.svg';
import './sign-up.css';
import { Link } from 'react-router-dom';

const EmailSent = () => {
  return (
    <>
      <div className="container">
        <section className="left-div"></section>
        <section className="right-div">
          <img src={logo} alt="logo" className="rd-container-1" />
          <div className="message-sent">
            <h1 className="sent">Confirmation email sent !</h1>
            <p>
              Didn't receive the email ? <br /> Please check the email address
              you used to make sure it matches the address
              <br /> of your account trying looking in your spam folder, or
              request another email below
            </p>
            <button className="button-2">Send Again</button>
            <Link to="/sign-up" className="go-back">
              Go back to Sign Up Page
            </Link>
          </div>
          <div className="Next">
            <Link to="/verification" className="signUp-btn">
              {' '}
              Next &gt;&gt;{' '}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default EmailSent;
