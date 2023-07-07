import React from 'react';

function Initials(props) {
  const containerStyle = {
    width: '7rem',
    height: '7rem',
    borderRadius: '50%',
    background: '#0744d3',
    color: 'white',
    position: 'relative',
  };

  const textStyle = {
    fontSize: '30px',
    textAlign: 'center',
    paddingTop: '2rem',
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
