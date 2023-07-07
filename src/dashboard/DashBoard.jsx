import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import OverviewPage from '../overview/OverviewPage';

export default function DashBoard() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div>
      <Box sx={{ display: 'flex', margin: '0 20px' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                backgroundColor: '#F0F4FC',
                margin: '0 20px 10px',
                padding: '10px 5px',
              }}
            >
              <Typography
                sx={{ fontSize: '18px', fontWeight: '700', color: '#010E2A' }}
              >
                Overview of Loans
              </Typography>
            </Breadcrumbs>
          </div>
          <OverviewPage />
        </Box>
      </Box>
    </div>
  );
}
