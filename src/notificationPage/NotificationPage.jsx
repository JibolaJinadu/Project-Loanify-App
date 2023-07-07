import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import {info} from './NotData';
import './NotificationPage.css';
import Button from '../general/Button';

function NotificationPage() {
  return (
    <div>
      {' '}
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
              <p className="breadcrumbs">Notification</p>
            </Breadcrumbs>
          </div>
          <div>
            {info.map((user) => (
              <div className="noticeWrapper" key={user.id}>
                <div className="noticeBox">
                  <img src={user.image} alt={user.name} className="" />
                  <div className="noticeTitle">
                    <h5>{user.name}</h5>
                    <p className="time">{`${user.min} ${user.loantype}`}</p>
                  </div>
                </div>
                <div className="">
                  <Button variant="contained">{''}</Button> 
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
}
export default NotificationPage;
