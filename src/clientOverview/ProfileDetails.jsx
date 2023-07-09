import React from 'react';
import './ProfileDetails.css';
import temi from './img/Temidayo.png';
import telephone from './img/telephone icon.svg';
import message from './img/messages icon.svg';

const ProfileDetails = () => {
  return (
    <section>
      <div className='profiles-details-container'>
        <div className='profiles-content'>
          <div>
            <img src={temi} alt="image" className='profileImage' />
          </div>
    
          <div>
            <div>
            <h3>Temidayo Adebayo</h3>
            <p tyle={{ color: '#8dba80', fontSize: '12px' }}> Case ID:RRZU9D6BVG</p>
            <div className='profiles-image-content'>
                <img src={telephone} alt="tel-icon" className='profile-icons' />
                <p style={{ fontSize: '14px' }}>09055555558</p>
                <img src={message} alt="msg-icon"  style={{ color: 'red' }} className='profile-icons'/>
                <p>temidayo.bayo@gmail.com</p>
            </div>
            <div>
              
            </div>
            
            </div>
            <div className='profiles-details '>
              <p  style={{ fontWeight: 'bold' }}>Loan Officer:</p>
              <p>John Doe</p>
            </div>
          </div>
        </div>
        <div>
          <div className='profiles-details profiles-spaced'>
            <p style= {{ fontWeight: 'bold' }}>Loan Type:</p>
            <p>Personal Loan</p>
          </div>
          <div className='profiles-details profiles-space'>
            <p style={{ fontWeight: 'bold' }}>Loan Status:</p>
            <p>Active</p>
            <button className='active-button'></button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProfileDetails;