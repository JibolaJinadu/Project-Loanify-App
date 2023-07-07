import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import './Message.css';
import { data } from './Data';

export default function Message() {
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
              <p className="breadcrumbs">All Messages</p>
            </Breadcrumbs>
          </div>
          <div>
            {data.map((user) => (
              <div className="messageWrapper" key={user.id}>
                <div className="messageBox">
                  <img src={user.image} alt={user.name} className="" />
                  <div className="messageTitle">
                    <h5>{user.name}</h5>
                    <p>{user.chat}</p>
                  </div>
                </div>
                <div className="">
                  <p className="time">{user.min}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
}
