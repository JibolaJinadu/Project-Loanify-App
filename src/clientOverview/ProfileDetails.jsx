import React from 'react';
import './ProfileDetails.css';
import temi from './img/Temidayo.png';
import telephone from './img/telephone icon.svg';
import message from './img/messages icon.svg';

const ProfileDetails = () => {
  return (
    <div className="flex">
      <div className="profile-flex">
        <img
          src={temi}
          alt="image"
          className='profileImage'
        ></img>
        <div className="highlighted-client">
          <h3>Temidayo Adebayo</h3>
          <p className='caseId'>
            Case ID:RRZU9D6BVG
          </p>
          <div className="loan-contact">
            <img src={telephone} alt="tel-icon" className="profile-icon" />
            <p className='tel-no'> 09055555558 </p>
            <img
              src={message}
              alt="tel-icon"
              style={{ color: 'red' }}
              className="profile-icon"
            />
            <p>temidayo.bayo@gmail.com</p>
          </div>
          <div className="loan-type">
            <p style={{ fontWeight: 'bold' }}>Loan Officer:</p>
            <p>John Doe</p>
          </div>
        </div>
      </div>
      <div>
        <div className="loan-type">
          <p style={{ fontWeight: 'bold' }}>Loan Type:</p>
          <p>Personal Loan</p>
        </div>
        <div className="loan-type">
          <p style={{ fontWeight: 'bold' }}>Loan Status:</p>
          <p>Active</p>
          <button className="active-btn"></button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
