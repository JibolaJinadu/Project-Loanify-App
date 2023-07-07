import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Security from '../security/Security';
import UserPermission from '../permission/UserPermission';
import General from '../general/General';
import Notification from '../notification/Notification';
import ProfileEdit from '../Profile/ProfileEdit';

export default function SettingsTabs({ onTabChange, activeTab }) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const getValueForTab = (tabName) => {
    switch (tabName) {
      case 'General':
        return 1;
      case 'Profile':
        return 2;
      case 'User Permission':
        return 3;
      case 'Notifications':
        return 4;
      case 'Security':
        return 5;
      default:
        return 1;
    }
  };

  const [value, setValue] = React.useState(getValueForTab(activeTab));

  React.useEffect(() => {
    setValue(getValueForTab(activeTab));
  }, [activeTab]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(event, newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
        scrollButtons={!isLargeScreen && 'auto'}
        aria-label="scrollable prevent tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
          },
          '& .Mui-selected': {
            borderBottom: 'none',
          },
          borderTop: '1px solid #83a1e8',
          borderRight: '1px solid #83a1e8',
          borderLeft: '1px solid #83a1e8',
          margin: '0 20px',
        }}
      >
        <div
          style={{ borderBottom: '1px solid #83a1e8', padding: '5px' }}
        ></div>
        <Tab
          label="General"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Profile"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="User Permissions"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Notifications"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Security"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <div
          style={{ borderBottom: '1px solid #83a1e8', padding: '5px' }}
        ></div>
      </Tabs>
      <TabPanel value={value} index={1}>
        <General />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProfileEdit />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UserPermission />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Notification />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Security />
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={2.5}>{children}</Box>}
    </Typography>
  );
}
