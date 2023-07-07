import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import LoanTab from './LoanTab';
import { useState } from 'react';

export default function Loan() {
  const [activeTabLabel, setActiveTabLabel] = useState('All Loans');

  const handleTabChange = (event, newValue) => {
    const tabs = [
      '',
      'All Loans',
      'New Applications',
      'Pending',
      'Active',
      'Due loan',
      'Extended',
      'Defaulted',
      'Closed',
      '',
    ];
    setActiveTabLabel(tabs[newValue]);
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
              <p className="breadcrumbs">Loans</p>
              <p className="breadcrumbs">{activeTabLabel}</p>
            </Breadcrumbs>
          </div>
          <LoanTab onTabChange={handleTabChange} />
        </Box>
      </Box>
    </div>
  );
}
