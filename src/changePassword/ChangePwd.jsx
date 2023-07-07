import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import './changePwd.css';

export default function ChangePwd() {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    if (!formData.confirmPassword) {
      setErrors({
        confirmPassword: 'Confirm Password is required',
      });
      isValid = false;
    }
    if (!formData.newPassword) {
      setErrors({
        newPassword: 'New Password is required',
      });
      isValid = false;
    }
    if (!formData.oldPassword) {
      setErrors({
        oldPassword: 'Old Password is required',
      });
      isValid = false;
    }

    if (isValid) {
      navigate('/verification');
    }
  }

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
              <Link className="breadcrumbs" to="/settings">
                Settings
              </Link>
              <p className="breadcrumbs">Change Password</p>
            </Breadcrumbs>
          </div>
          <div className="pwd">
            <form className="pwd-form" onSubmit={handleSubmit}>
              <h1 className="title">Change Password</h1>

              <div className="form-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Old Password"
                  className="form-input"
                  value={formData.oldPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, oldPassword: e.target.value });
                    if (e.target.value === '') {
                      setErrors({
                        ...errors,
                        oldPassword: 'Please enter old password',
                      });
                    } else if (e.target.value.length < 8) {
                      setErrors({
                        ...errors,
                        oldPassword:
                          'Password must be atleast 8 characters long',
                      });
                    } else {
                      setErrors({
                        ...errors,
                        oldPassword: '',
                      });
                    }
                  }}
                />
                <span
                  className="login-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </span>
                {errors.oldPassword && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {errors.oldPassword}
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  className="form-input"
                  value={formData.newPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, newPassword: e.target.value });
                    if (e.target.value === '') {
                      setErrors({
                        ...errors,
                        newPassword: 'Please confirm password',
                      });
                    } else if (e.target.value.length < 8) {
                      setErrors({
                        ...errors,
                        newPassword:
                          'Password must be atleast 8 characters long',
                      });
                    } else {
                      setErrors({
                        ...errors,
                        newPassword: '',
                      });
                    }
                  }}
                />
                <span
                  className="login-password"
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? <Visibility /> : <VisibilityOff />}
                </span>
                {errors.newPassword && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {errors.newPassword}
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="form-input"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                    if (e.target.value === '') {
                      setErrors({
                        ...errors,
                        confirmPassword: 'Please re-enter password',
                      });
                    } else if (e.target.value.length < 8) {
                      setErrors({
                        ...errors,
                        confirmPassword:
                          'Password must be atleast 8 characters long',
                      });
                    } else {
                      setErrors({
                        ...errors,
                        confirmPassword: '',
                      });
                    }
                  }}
                />
                <span
                  className="login-password"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </span>
                {errors.confirmPassword && (
                  <span style={{ color: 'red', fontSize: '12px' }}>
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-blue">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
}
