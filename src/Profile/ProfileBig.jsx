import React from 'react';

const ProfileBig = (props) => {
  return (
    <>
      <div
        style={{
          fontWeight: '700',
          fontSize: '20px',
          textTransform: 'capitalize',
          marginBottom: '10px',
        }}
      >
        {props.bold}
      </div>
      <div
        style={{
          fontWeight: '500',
          fontSize: '16px',
          textTransform: 'capitalize',
        }}
      >
        {props.tiny}
      </div>
    </>
  );
};

export default ProfileBig;
