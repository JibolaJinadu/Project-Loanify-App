import React from 'react';

function Initials(props) {
  const containerStyle = {
    width: '7rem',
    height: '7rem',
    borderRadius: '50%',
    position: 'relative',
    border: '0.5px solid #0744d3',
  };

  const textStyle = {
    fontSize: '30px',
    textAlign: 'center',
    paddingTop: '2rem',
    fontWeight: '700',
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>
        {props.InitialsA} {props.InitialsB}
      </p>
    </div>
  );
}

export default Initials;
