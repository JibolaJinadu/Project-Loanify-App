import React from 'react';
import { Circle } from 'rc-progress';

export default function CircleProgress({ percent, strokeColor }) {
  return (
    <div className='circleWrapper' style={{ width: '2.5rem', position: 'relative', marginTop: '0.5rem'}}>
      <div style={{transform: 'rotate(-90deg)' }}>
        <Circle percent={percent} strokeWidth={6} strokeColor={strokeColor} trailWidth={6} />
      </div>
      <div className="circlePercent" style={{
        position: 'absolute',
        top: '50%',
        left: '35%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
}} 
>{percent}</div>
    </div>
  );
}
