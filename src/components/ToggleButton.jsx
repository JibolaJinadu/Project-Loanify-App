import React, { useState } from 'react';
import shutdown from './assets/shutdown.png';
import circle from './assets/circle.png';

const ToggleButton = () => {
  const [isLeft, setIsLeft] = useState(true);

  const handleClick = () => {
    setIsLeft(!isLeft);
  };

  return (
    <button
      onClick={handleClick}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {isLeft ? (
        <>
          <img src={shutdown} alt="Left Icon" style={{ marginRight: '5px' }} />
          <span>Left</span>
        </>
      ) : (
        <>
          <span>Right</span>
          <img src={circle} alt="Right Icon" style={{ marginLeft: '5px' }} />
        </>
      )}
    </button>
  );
};

export default ToggleButton;
