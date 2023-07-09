import React from 'react';
import './RiskScore.css';
import risk from './img/Risk Score.jpeg';

const RiskScore = () => {
  return (
    <div>
      <div className='risk-text'>
        <div className='risk-good'>
          <h4>Risk Score:</h4>
          <h4>Risk Level:</h4>
          <h4>System Decision:</h4>
          <h4>Odds(Good:Bad):</h4>
          <h4>Default Probability:</h4>
        </div>
       
        <div  className='risk-grade'>
          <p>630</p>
          <p>Fair</p>
          <p style={{ color: 'red' }}>Decline</p>
          <p>20:40</p>
          <p style={{ color: 'red' }}>56%</p>
        </div>
        
        <div className='risk-image'>
          <img src={risk} alt="image" style={{ width: '200px' }}></img>
        </div>
      </div>
      <hr />
      <div  className='risk-text decision-text'>
        <div className='decision-comments'>
        <h4 >Decision Comments:</h4>
        </div>

        
        <div className='risk-grades'>
          <div className='decision-recommendation'>
          <p>1. Open prior loan from another loan company</p>
          <p>2. Insufficient Revenue</p>
          <p>3. Insufficient collateral</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskScore;

