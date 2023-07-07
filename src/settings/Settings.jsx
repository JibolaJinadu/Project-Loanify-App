// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Sidebar from '../components/Sidebar';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import SettingsTabs from '../settings/SettingsTabs';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { Link, useNavigate } from 'react-router-dom';
// import '../support/Support.css';
// import { useState } from 'react';

// export default function Settings() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('General');
//   const [activeTabLabel, setActiveTabLabel] = useState('General');

//   const handleTabChange = (event, newValue) => {
//     const tabs = [
//       '',
//       'General',
//       'Profile',
//       'User Permission',
//       'Notifications',
//       'Security',
//       '',
//     ];
//     // setActiveTabLabel(tabs[newValue]);
//     setActiveTab(tabs[newValue]);
//     setActiveTabLabel(tabs[newValue]);
//     navigate(`/settings/${tabs[newValue]}`);
//   };
//   return (
//     <div>
//       <Box sx={{ display: 'flex' }}>
//         <Sidebar />
//         <Box component="main" sx={{ flexGrow: 1, margin: '0 20px' }}>
//           <Toolbar />
//           <div role="presentation">
//             <Breadcrumbs
//               separator={<ChevronRightIcon />}
//               aria-label="breadcrumb"
//               sx={{
//                 backgroundColor: '#F0F4FC',
//                 margin: '0 20px 10px',
//                 padding: '10px 5px',
//               }}
//             >
//               <Link className="breadcrumbs" to="/dashboard">
//                 Home
//               </Link>
//               <Link className="breadcrumbs" to="/settings">
//                 Settings
//               </Link>
//               <p className="breadcrumbs">{activeTabLabel}</p>
//             </Breadcrumbs>
//           </div>
//           <SettingsTabs activeTab={activeTab} onTabChange={handleTabChange} />
//         </Box>
//       </Box>
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../support/Support.css';
import { useState, useEffect } from 'react';

export default function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const currentTab = location.pathname.split('/')[2];
    const tabs = [
      '',
      'General',
      'Profile',
      'User Permission',
      'Notifications',
      'Security',
      '',
    ];
    const tabIndex = tabs.indexOf(currentTab);
    if (tabIndex !== -1) {
      setActiveTab(tabs[tabIndex]);
    }
  }, [location]);

  const handleTabChange = (event, newValue) => {
    const tabs = [
      '',
      'General',
      'Profile',
      'User Permission',
      'Notifications',
      'Security',
      '',
    ];
    setActiveTab(tabs[newValue]);
    navigate(`/settings/${tabs[newValue]}`);
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, margin: '0 20px' }}>
          <Toolbar />
          <div role="presentation">
            <Breadcrumbs
              separator={<ChevronRightIcon />}
              aria-label="breadcrumb"
              sx={{
                backgroundColor: '#F0F4FC',
                margin: '0 20px 10px',
                padding: '10px 5px',
              }}
            >
              <Link className="breadcrumbs" to="/dashboard">
                Home
              </Link>
              <Link className="breadcrumbs" to="/settings">
                Settings
              </Link>
              <p className="breadcrumbs">{activeTab}</p>
            </Breadcrumbs>
          </div>
          <SettingsTabs activeTab={activeTab} onTabChange={handleTabChange} />
        </Box>
      </Box>
    </div>
  );
}
