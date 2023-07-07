import React, { useState } from 'react';
import './ProfileDetails.css';
import temi from './img/Temidayo.png';
import telephone from './img/telephone icon.svg';
import message from './img/messages icon.svg';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const ProfileDetails = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [approveNotification, setApproveNotification] = useState('');
  const [showApproveNotification, setShowApproveNotification] = useState(false);

  const handleApproveButtonClick = () => {
    setSubmissionMessage('');
    setApproveNotification('Application Approved\nThe loan application has been successfully approved.');
    setShowNotification(true);
    setShowApproveNotification(true);
  };

  const handleButtonClick = () => {
    setSubmissionMessage('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmissionMessage(
      'Application Declined\nThe loan application has been declined'
    );
  };

  const handleClose = () => {
    setSubmissionMessage('');
    setShowNotification(false);
    setShowApproveNotification(false);
  };

  return (
    <div className="flex">
      <div className="profile-flex">
        <img
          src={temi}
          alt="image"
          style={{ height: '150px', width: '150px', borderRadius: '50%' }}
        ></img>
        <div className="highlighted">
          <h3>Temidayo Adebayo</h3>
          <p style={{ color: '#8dba80', fontSize: '12px' }}>
            Case ID:RRZU9D6BVG
          </p>
          <div className="loan-contact">
            <img src={telephone} alt="tel-icon" className="profile-icon" />
            <p style={{ fontSize: '14px' }}> 09055555558 </p>
            <img
              src={message}
              alt="tel-icon"
              style={{ color: 'red' }}
              className="profile-icon"
            />
            <p>somebody@gmail.com</p>
          </div>
          <div className="loan-type">
            <p style={{ fontWeight: 'bold' }}>Loan Officer:</p>
            <p>Unassigned</p>
          </div>
        </div>
      </div>
      <div>
        <div className="loan-type">
          <p style={{ fontWeight: 'bold' }}>Loan Type:</p>
          <p>Business Loan</p>
        </div>
        <div className="loan-type pad-top">
          <p style={{ fontWeight: 'bold' }}>Loan Status:</p>
          <p>Pending</p>
          <button className="small"></button>
        </div>
        <div className="btn-container">
        <button className="approve" onClick={handleApproveButtonClick}>Approve</button>
          <form onSubmit={handleFormSubmit}>
          
            <div>
              <Button
                className="decline"
                onClick={handleButtonClick}
                type="submit"
                style={{
                  color: 'white',
                  backgroundColor: '#d30744',
                  borderRadius: '0.2rem',
                  fontSize: '',
                  textTransform: 'lowercase',
                }}
              >
                <span style={{ textTransform: 'uppercase' }}>D</span>ecline
              </Button>
            </div>
          </form>
        </div>
        <Dialog
  open={showApproveNotification}
  onClose={() => setShowApproveNotification(false)}
  style={{ border: '1px solid #8dba80' }}
>
  <DialogTitle
    style={{
      color: '#00d43d',
      fontSize: '50px',
      padding: '50px 270px 0px',
    }}
  >
    <FontAwesomeIcon className="check-icon" icon={faCheck} />
  </DialogTitle>
  <DialogContent
    style={{
      color: '#00d43d',
      fontSize: '15px',
      fontWeight: 'bolder',
      padding: '0px 100px 50px',
    }}
  >
    {approveNotification.split('\n').map((message, index) => (
              <p
                key={index}
                style={{
                  color: index === 1 ? 'grey' : '#00d43d',
                  textAlign: 'center',
                }}
              >
                {message}
              </p>
            ))}
  </DialogContent>
</Dialog>

        <Dialog
          open={submissionMessage !== ''}
          onClose={handleClose}
          style={{ border: '1px solid #d30744' }}
        >
          <DialogTitle
            style={{
              color: '#d30744',
              fontSize: '50px',
              padding: '60px 210px 0px',
            }}
          >
            <FontAwesomeIcon className="check-icon" icon={faXmark} />
          </DialogTitle>
          <DialogContent
            style={{
              color: '#d30744',
              fontSize: '15px',
              fontWeight: 'bolder',
              padding: '0px 100px 50px',
            }}
          >
            {submissionMessage.split('\n').map((message, index) => (
              <p
                key={index}
                style={{
                  color: index === 1 ? 'grey' : '#d30744',
                  textAlign: 'center',
                }}
              >
                {message}
              </p>
            ))}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProfileDetails;
