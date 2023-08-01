import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import LoanOverviewTab from './LoanOverviewTab';
import { useLocation } from 'react-router-dom';

const LoanOverview = () => {
  const location = useLocation();
  const { userInfo } = location.state || {};
  const [activeTabLabel, setActiveTabLabel] = React.useState(
    'General Information'
  );
  // console.log(userInfo);
  // console.log('userInfo: ' + userInfo);
  const handleTabChange = (event, newValue) => {
    const tabs = [
      '',
      'General Information',
      'Loan Application',
      'Risk Score',
      'Documents',
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
              <Link className="breadcrumbs" to="/loans">
                Loans
              </Link>
              <p className="breadcrumbs">Loans Overview</p>
              <p className="breadcrumbs">{activeTabLabel}</p>
            </Breadcrumbs>
          </div>
          <LoanOverviewTab onTabChange={handleTabChange} data={userInfo} />
        </Box>
      </Box>
    </div>
  );
};

export default LoanOverview;
