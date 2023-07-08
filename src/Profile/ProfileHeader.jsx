import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileHighLight from './ProfileHighLight';
import './ProfileStyles.css';

function ProfileHeader() {
  return (
    <div className="shift-wrapper">
      <div className="shift">
        <ProfileImage />
        <ProfileHighLight />
      </div>
    </div>
  );
}

export default ProfileHeader;
