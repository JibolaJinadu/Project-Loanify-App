import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import avatar from './assets/Avatar.png';
import { Link } from 'react-router-dom';
import jane from './assets/jane.png';
import './sidebar.css';
import { AuthContext } from '../AuthContext';
import CircleIcon from '@mui/icons-material/Circle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    position: 'fixed',
    top: 50,
    right: 70,
    margin: 0,
    borderRadius: 10,
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function UserDialog() {
  const { imageSrc, firstName, lastName, isActive } =
    React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="icon-btn" onClick={handleClickOpen}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Profile"
              style={{ width: '24px', height: '24px', borderRadius: '50%' }}
            />
          ) : (
            <div className="avatar-box">
              {`${firstName.charAt(0)}${lastName.charAt(0)}`}
            </div>
          )}
          <CircleIcon
            sx={{
              color: isActive ? '#297F04' : '#D30744',
              height: '10px',
              width: '10px',
              marginLeft: '-5px',
            }}
          />
        </div>
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <List>
          <ListItem>
            <ul className="user-lists">
              <li>
                <Link className="user-link" to="/profile">
                  View Profile
                </Link>
              </li>
              <li>
                <Link className="user-link" to="/settings/Profile">
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link className="user-link logout" to="/login">
                  Log Out
                </Link>
              </li>
            </ul>
          </ListItem>
        </List>
      </BootstrapDialog>
    </div>
  );
}
