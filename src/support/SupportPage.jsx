import React, { useState } from 'react';
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
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleButtonClick = () => {
    setShowTextarea(!showTextarea);
    setSubmissionMessage('');
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmissionMessage('Issue Sent');
    setTextareaValue('');
  };

  const handleClose = () => {
    setSubmissionMessage('');
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
              sx={{
                backgroundColor: '#F0F4FC',
                width: '94%',
                margin: '0 20px 10px',
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
            <div className="section-2a">
              <Link to="/support/faq" className="faq-link">
                FAQ
              </Link>
            </div>

            <div className="section-3">
              <div>
                <p className="section-3-p1">Toll-free call</p>
                <p className="section-3-p2">
                  Talk to a Support Officer at any time
                </p>
              </div>
              <button className="toll-btn">080 0000 1234</button>
            </div>

            <div className='section-4'>
            <Button
                onClick={handleButtonClick}
                className="report-final-sub1"
                style={{
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1.5%',
                }}
              >
                <p className="report-drp-p1">Report an Issue</p>
                <FontAwesomeIcon className="report-drp-p2" icon={faChevronDown} />
              </Button>
              {showTextarea && (
                <form className="report-form-cover" onSubmit={handleFormSubmit}>
                  <textarea
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    className="report-textarea"
                  ></textarea>
                  <Button
                    className="report-final-sub"
                    style={{
                      backgroundColor: '#0744d3',
                      color: 'white',
                      fontSize: '10px',
                    }}
                    type="submit"
                  >
                    Send
                  </Button>
                </form>
              )}
              <Dialog open={submissionMessage !== ''} onClose={handleClose}>
                <DialogTitle
                  className='dialog-title'
                  style={{
                    color: 'green',
                    fontSize: '50px',
                    padding: '50px 120px 0px',
                  }}
                >
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                </DialogTitle>
                <DialogContent
                  className='dialog-content'
                  style={{
                    fontSize: '15px',
                    fontWeight: 'bolder',
                    padding: '0px 100px 50px',
                  }}
                >
                  {submissionMessage}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SupportPage;
