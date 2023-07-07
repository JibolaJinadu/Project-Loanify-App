import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileHighLight from './ProfileHighLight';
import './ProfileStyles.css';

function ProfileHeader({ role, fullName }) {
  return (
    <div className="shift-wrapper">
      <div className="shift">
        <ProfileImage firstName={fullName.split(' ')[0][0]} lastName={fullName.split(' ')[1][0]} />
        <ProfileHighLight role={role} fullName={fullName} />
      </div>
    </div>
  );
}

export default ProfileHeader;
