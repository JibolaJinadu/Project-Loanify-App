import React, { useContext } from 'react';
import ProfileBig from './ProfileBig';
import './ProfileStyles.css';
import { AuthContext } from '../AuthContext';

const ProfileHighLight = ({ role, fullName }) => {
  const { isActive } = useContext(AuthContext);

  return (
    <div className="dev">
      <div>
        <ProfileBig bold={fullName} />
      </div>
      <div className="move">
        <div>
          <ProfileBig tiny={'role:'} />
        </div>
        <div>
          <ProfileBig tiny={role} />
        </div>
      </div>
      <div className="move">
        <div>
          <ProfileBig tiny={'Status:'} />
        </div>
        <div style={{ color: isActive ? '#297F04' : '#D30744' }}>
          <ProfileBig tiny={isActive ? 'Active' : 'Inactive'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHighLight;
