import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import './Support.css';
import Sidebar from '../components/Sidebar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Breadcrumbs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SupportPage = () => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [showSubmissionMessage, setShowSubmissionMessage] = useState(false);

  const handleClick = () => {
    setShowTextArea(!showTextArea);
    setTextareaValue('');
    setShowSubmissionMessage(false);
  };

  const handleChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSend = () => {
    if (textareaValue.trim() === '') {
      // Prevent submission of empty message
      return;
    }

    setShowSubmissionMessage(true);
    setShowTextArea(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <div role="presentation">
            <Breadcrumbs
              separator={<ChevronRightIcon />}
              aria-label="breadcrumb"
              className="breadcrumbs1"
              sx={{
                backgroundColor: '#F0F4FC',
                margin: '0 20px 10px 20px',
                padding: '10px 5px',
              }}
            >
              <Link to="/dashboard" className="breadcrumbs">
                Home
              </Link>
              <p className="breadcrumbs">Support</p>
            </Breadcrumbs>
          </div>

          <div className="overall">
            <div className="FAQ-session support-session">
              <Link to="/support/faq" className="FAQ-content">
                FAQ
              </Link>
            </div>

            <div className="Toll-session support-session">
              <div>
                <p className="toll-p1">Toll-free call</p>
                <p className="toll-p2">Talk to a Support Officer at any time</p>
              </div>
              <button className="toll-bttn">
                <a href="tel:080 0000 1234" className="toll-bttn1">
                  080 0000 1234
                </a>
              </button>
            </div>

            <div>
              <button
                onClick={handleClick}
                className="support-session report-bttn"
              >
                <div className="report-bttn-text">
                  <p>{showTextArea ? 'Report an Issue' : 'Report an Issue'}</p>
                  <p>
                    <FontAwesomeIcon
                      className="report-drpdwn"
                      icon={faChevronDown}
                    />
                  </p>
                </div>
              </button>
              {showTextArea && (
                <div style={{ marginTop: '3px', position: 'relative' }}>
                  <textarea
                    className="report-textarea"
                    style={{
                      minHeight: '30vh',
                      padding: '1vw',
                      outline: 'none',
                    }}
                    placeholder="Enter your message here"
                    value={textareaValue}
                    onChange={handleChange}
                  />
                  <button
                    onClick={handleSend}
                    className="report-send-button"
                    style={{
                      position: 'absolute',
                      bottom: '15px',
                      right: '2px',
                      padding: '1vh 2vw',
                      backgroundColor: '#0744d3',
                      color: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    Send
                  </button>
                </div>
              )}
              {showSubmissionMessage && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '30vh',
                  }}
                >
                  <div
                    className="submission-mssg"
                    style={{
                      width: '20vw',
                      height: '15vw',
                      background: 'lightgray',
                      borderRadius: '8px',
                      padding: '40px 16px 0',
                      textAlign: 'center',
                    }}
                  >
                    <FontAwesomeIcon className="check-icon" icon={faCheck} />
                    <p>Submission successful!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SupportPage;
