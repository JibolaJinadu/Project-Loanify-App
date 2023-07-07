import React from 'react';
import './RiskScore.css';
import HalfCircleChart from './HalfCircleChart';

const RiskScore = () => {
  return (
    <div className="risk-space">
      <div className="risk-container">
        <div className="risk-scoreClient">
          <p>Risk Score:</p>
          <p>Risk Level:</p>
          <p>System Decision:</p>
          <p>Odds (Good:Bad):</p>
          <h5>Default Probability:</h5>
        </div>

        <div className="risk-grade risk-space">
          <p>700/800</p>
          <p>Low</p>
          <p style={{ color: 'green' }}>Approve</p>
          <p>80:20</p>
          <p style={{ color: 'green' }}>15%</p>
        </div>
        <div></div>
        <p>
          <HalfCircleChart />
        </p>
      </div>
      <hr />
      <div className="comment-container">
        <p className="risk-comment">Decision Comments:</p>
        <div className="risk-space">
          <div className="risk-highlighted">
            <p className="risk-feedback">
              1. System recommends making a standard client check
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskScore;
