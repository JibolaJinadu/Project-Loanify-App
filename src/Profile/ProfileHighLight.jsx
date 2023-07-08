import React, { useContext } from 'react';
import ProfileBig from './ProfileBig';
import './ProfileStyles.css';
import { AuthContext } from '../AuthContext';

const ProfileHighLight = () => {
  const { isActive, firstName, lastName, userRole } = useContext(AuthContext);

  return (
    <div className="dev">
      <div>
        <ProfileBig bold={`${firstName} ${lastName}`} />
      </div>
      <div className="move">
        <div>
          <ProfileBig tiny={'role: '} />
        </div>
        <div>
          <ProfileBig tiny={`${userRole}`} />
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
