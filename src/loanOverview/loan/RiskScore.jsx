import React from 'react';
import './RiskScore.css';
import risk from './img/Risk Score.jpeg';

const RiskScore = () => {
  return (
    <div>
      <div className="risk-score">
        <div className="rs-sizeb">
          <p>Risk Score:</p>
          <p>Risk Level:</p>
          <p>System Decision:</p>
          <p>Odds(Good:Bad):</p>
          <p>Default Probability:</p>
        </div>
        <div className='rs-space'></div>
        <div className="rs-size">
          <p>630</p>
          <p>Fair</p>
          <p style={{ color: 'red' }}>Decline</p>
          <p>20:40</p>
          <p style={{ color: 'red' }}>56%</p>
        </div>
        <div className='risk-space'></div>
        <div>
          <img src={risk} alt="image" style={{ width: '200px' }}></img>
        </div>
      </div>
      <hr />
      <div className="risk-score">
        <p className='risk-comment'>Decision Comments:</p>
        <div className='rs-space'></div>
        <div className="rs-highlighted">
          <p className='riskComment'>1. Open prior loan from another loan company</p>
          <p className='riskComment'>2. Insufficient Revenue</p>
          <p className='riskComment'>3. Insufficient collateral</p>
          
        </div>
      </div>
    </div>
  );
};

export default RiskScore;
