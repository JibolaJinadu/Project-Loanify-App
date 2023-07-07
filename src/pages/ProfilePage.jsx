import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProfileLoanOfficer from './ProfileLoanOfficer';
import ProfilePercentage from './ProfilePercentage';
import ProfileTable from './ProfileTable';
import './profile.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';

function ProfilePage() {
  const { loginToken, setLoginToken } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    role: '',
  });

  const GetProfile = async () => {
    try {
      const response = await axios.get(
        `https://loanifyteama-production.up.railway.app/api/v1/users/me`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      setProfileData({
        firstName: response.data.data.firstName,
        lastName: response.data.data.lastName,
        role: response.data.data.role,
      });
      // toast.success('Profile gotten');
    } catch (error) {
      console.log(error);
      // toast.error("Couldn't fetch profile data!");
    }
  };

  useEffect(() => {
    GetProfile();
  }, []);
  const fullName = `${profileData.firstName} ${profileData.lastName}`;
  return (
    <Box sx={{ display: 'flex', margin: '0 40px' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<ChevronRightIcon />}
            sx={{
              backgroundColor: '#F0F4FC',
              padding: '10px 5px',
            }}
          >
            <Link to="/dashboard" className="breadcrumbs">
              Home
            </Link>
            <p className="breadcrumbs">Profile</p>
          </Breadcrumbs>
        </div>
        <div className="profileNavWrapper">
          <ProfileLoanOfficer fullName={fullName} role={profileData.role} />
          <ProfilePercentage />
          <ProfileTable />
        </div>
      </Box>
    </Box>
  );
}
export default ProfilePage;
