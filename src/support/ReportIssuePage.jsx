import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Support.css';

const ReportIssuePage = () => {
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Submitted:', issue, description);
    // Reset form fields
    setIssue('');
    setDescription('');
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, margin: '0 20px' }}>
          <Toolbar />
          <div role="presentation">
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<ChevronRightIcon />}
              sx={{
                backgroundColor: '#F0F4FC',
                margin: '0 20px 10px',
                padding: '10px 5px',
              }}
            >
              <Link className="breadcrumbs" to="/dashboard">
                Home
              </Link>
              <Link className="breadcrumbs" to="/support">
                Support
              </Link>
              <p className="breadcrumbs">Chat-box</p>
            </Breadcrumbs>
          </div>
          <div className="report-issue-container">
            <h1 className="report-issue-header">Report an Issue</h1>
            <form onSubmit={handleSubmit} className="report-issue-form">
              <label htmlFor="issue" className="report-issue-label">
                Issue Type
              </label>
              <select
                id="issue"
                className="report-issue-select"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
              >
                <option value="" selected>
                  Select an issue type
                </option>
                <option value="billing">Billing</option>
                <option value="technical">Technical</option>
                <option value="account">Account</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="description" className="report-issue-label">
                Description
              </label>
              <textarea
                id="description"
                className="report-issue-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <button type="submit" className="report-issue-submit">
                Submit
              </button>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ReportIssuePage;
