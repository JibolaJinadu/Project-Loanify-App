import React from 'react';
import './RiskScore.css';
import risk from './img/Risk Chart.jpg';

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
      
        <div className='risk-grade'>
          <p>700/800</p>
         <p>Low</p>
          <p style={{ color: 'green' }}>Approved</p>
          <p>80:20</p>
          <p style={{ color: 'green' }}>15%</p>    
        </div>
        
        <div className='risk-image'>
          <img src={risk} alt="image" style={{ width: '200px' }}></img>
        </div>
      </div>

      <hr />
    
      <div className='risk-text decision-text'>
        <div className='decision-comments'>
        <h4>Decision Comments:</h4>
        </div>
       
        <div className='risk-grades'>
          <div className='decision-recommendation'>
          <p className='riskComment'>1. System recommends making a standard client check</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default RiskScore;
