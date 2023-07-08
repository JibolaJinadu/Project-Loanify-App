import React, { useContext } from 'react';
import { useState } from 'react';
import loanOfficer from './img/loanOfficer.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function ProfileLoanOfficer() {
  const { isActive, imageSrc, firstName, lastName, userRole } =
    useContext(AuthContext);

  return (
    <div className="profileLoanWrapper">
      <div className="loanOfficerDetails">
        {imageSrc ? (
          <img src={imageSrc} alt="" className="" />
        ) : (
          <div className="loanOfficerInitials">{`${firstName.charAt(
            0
          )}${lastName.charAt(0)}`}</div>
        )}
        <div className="loan-text">
          <h4 className="profile-name">{`${firstName} ${lastName}`}</h4>
          <p className="profile-sub">Role: {userRole}</p>
          <p className="profile-sub">
            Status:{' '}
            <span style={{ color: isActive ? '#297F04' : '#D30744' }}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </p>
        </div>
      </div>
      <div className="">
        <Link
          to="/settings/Profile"
          className="edit--button"
          style={{
            fontSize: '14px',
            fontWeight: '500',
            color: 'black',
            borderRadius: '8px',
            border: '1px solid #83a1e8',
            backgroundColor: 'white',
            padding: '5px 20px',
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
