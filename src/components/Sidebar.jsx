import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../login/img/LOANIFY logo.svg';
import { Link } from 'react-router-dom';
import Settings from '../settings/SettingsTabs';
import Navbar from './Navbar';
import './sidebar.css';
import clients from './assets/clients.svg';
import dashboard from './assets/dashboard.svg';
import loans from './assets/loan.svg';
import messages from './assets/message.svg';
import profile from './assets/profile.svg';
import reports from './assets/reports.svg';
import settings from './assets/settings.svg';
import support from './assets/support.svg';
import MessageDialog from './MessageDialog';
import NotificationDialog from './NotificationDialog';
import UserDialog from './UserDialog';
import notification from './assets/notifications.svg';
import dashboardActive from './assets/dashboard-blue.svg';
import profileActive from './assets/profile-blue.svg';
import ClientActive from './assets/clients-blue.svg';
import supportActive from './assets/support-blue.svg';
import settingActive from './assets/settings-blue.svg';
import reportActive from './assets/reports-blue.svg';
import notificationActive from './assets/notifications-blue.svg';
import loanActive from './assets/loan-blue.svg';
import messageActive from './assets/message-blue.svg';

const drawerWidth = 200;

function Sidebar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      list: 'Dashboard',
      icon: dashboard,
      path: '/dashboard',
      iconActive: dashboardActive,
    },
    {
      list: 'Loans',
      icon: loans,
      path: '/loans',
      iconActive: loanActive,
    },
    {
      list: 'Profile',
      icon: profile,
      path: '/profile',
      iconActive: profileActive,
    },
    {
      list: 'Messages',
      icon: messages,
      path: '/messages',
      iconActive: messageActive,
    },
    {
      list: 'Notification',
      icon: notification,
      path: '/notification',
      iconActive: notificationActive,
    },
    {
      list: 'Reports',
      icon: reports,
      path: '/reports',
      iconActive: reportActive,
    },
    {
      list: 'Clients',
      icon: clients,
      path: '/clients',
      iconActive: ClientActive,
    },
    {
      list: 'Settings',
      icon: settings,
      path: '/settings',
      iconActive: settingActive,
    },
    {
      list: 'Support',
      icon: support,
      path: '/support',
      iconActive: supportActive,
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img src={logo} alt="Loanify Logo" className="sidebar-logo" />
      </Toolbar>
      <List
        sx={{ backgroundColor: '#04297F', color: 'white', height: '100vh' }}
      >
        {items.map((text, index) => {
          const isActive = location.pathname.startsWith(text.path);
          const listItemStyles = {
            padding: '2px 20px',
            marginTop: text.list === 'Support' ? '5rem' : '0px',
            '&:hover': {
              backgroundColor: isActive
                ? 'rgba(255, 255, 255, 0.9)'
                : 'initial',
            },
            ...(isActive && {
              backgroundColor: '#fff',
              color: '#04297F',
            }),
          };

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => navigate(text.path)}
                sx={listItemStyles}
              >
                <div className="side--menu">
                  <div style={{ marginLeft: '10px' }}>
                    <img
                      src={isActive ? text.iconActive : text.icon}
                      alt="Icon"
                      style={{
                        width: text.list === 'Profile' ? '20px' : '22px',
                        marginLeft: text.list === 'Profile' ? '3px' : '0',
                        height: '25px',
                      }}
                    />
                  </div>
                  <div style={{ height: '25px' }}>
                    <h1
                      style={{
                        paddingTop: '3px',
                        marginLeft: '10px',
                        paddingRight: '10px',
                        fontSize: '14px',
                        fontWeight: isActive ? '600' : '500',
                        textAlign: 'center',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      {text.list}
                    </h1>
                  </div>
                </div>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'white',
          boxShadow: 'none',
          color: 'black',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar">
            <MessageDialog />
            <NotificationDialog />
            <UserDialog />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              overflow: 'hidden',
              border: 'none',
            },
            border: 'none',
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              overflow: 'hidden',
              border: 'none',
            },
            border: 'none',
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
