import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import SwitchProfile from './SwitchProfile';
import ProfileHeader from './ProfileHeader';
import './ProfileStyles.css';

export default function ProfileEdit() {
  const { loginToken, setLoginToken } = useContext(AuthContext);
  const [getData, setGetData] = useState('');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phoneNumber: '',
    address: '',
    dob: '',
    martialStatus: '',
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
        email: response.data.data.email,
        gender: response.data.data.gender,
        phoneNumber: response.data.data.phoneNumber,
        address: response.data.data.address,
        dob: response.data.data.dob,
        martialStatus: response.data.data.martialStatus,
        role: response.data.data.role,
      });
      // toast.success('Profile gotten');
    } catch (error) {
      console.log(error);
      toast.error("Couldn't fetch profile data!");
    }
  };

  useEffect(() => {
    GetProfile();
  }, []);

  const fullName = `${profileData.firstName} ${profileData.lastName}`;

  const [update, setUpdate] = useState({
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    phoneNumber: profileData.phoneNumber,
    basicInformation: {
      address: profileData.address,
    },
  });

  const UpdateProfile = async () => {
    try {
      const response = await axios.put(
        `https://loanifyteama-production.up.railway.app/api/v1/users`,
        update,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      toast.success('Profile Update!');
    } catch (error) {
      console.log(error);
      toast.error("Couldn't update profile data!");
    }
  };

  return (
    <section className="">
      <ProfileHeader role={profileData.role} fullName={fullName} />
      <div className="">
        <form action="" className="">
          <h3 className="">Personal Information</h3>
          <div className="profile-form">
            <div className="profile-group">
              <label className="">First Name</label>
              <input
                type="text"
                // placeholder="Olufemi"
                className=""
                value={profileData.firstName}
                onChange={(e) =>
                  setProfileData({ ...profileData, firstName: e.target.value })
                }
              />
            </div>
            <div className="profile-group">
              <label>Last Name</label>
              <input
                type="text"
                // placeholder="Ayo"
                className=""
                value={profileData.lastName}
                onChange={(e) =>
                  setProfileData({ ...profileData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="profile-form">
            <div className="profile-group">
              <label>Email</label>
              <input
                type="email"
                // placeholder="Olufemiayo@gmail.com"
                className=""
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
              />
            </div>
            <div className="profile-group">
              <label>Number</label>
              <input
                type="telephone"
                // placeholder="08022222222"
                className=""
                value={profileData.phoneNumber}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="profile-form">
            <div className="profile-group">
              <label>Address</label>
              <input
                type="address"
                // placeholder="No 10, Superman lane, infinity street, oz"
                className=""
                value={profileData.address}
                onChange={(e) =>
                  setProfileData({ ...profileData, address: e.target.value })
                }
              />
            </div>
            <div className="profile-group">
              <label>Role</label>
              <input
                type="text"
                // placeholder="Senior Loan Officer"
                className=""
                value={profileData.role}
                onChange={(e) =>
                  setProfileData({ ...profileData, role: e.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
      <SwitchProfile />
      <div className="new-btn">
        <button className="new" onClick={UpdateProfile}>
          save
        </button>
      </div>
    </section>
  );
}
