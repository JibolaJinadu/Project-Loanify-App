import React, { useContext } from 'react';
import './ProfileStyles.css';
import { AuthContext } from '../AuthContext';

function SwitchProfile() {
  const { isActive, toggleButton } = useContext(AuthContext);

  console.log(isActive);
  return (
    <>
      <div
        onClick={toggleButton}
        className={` ${isActive ? 'toggleBox' : 'toggleRed'}`}
      >
        <p>Active</p>
        <p>Inactive</p>
      </div>
    </>
  );
}

export default SwitchProfile;
