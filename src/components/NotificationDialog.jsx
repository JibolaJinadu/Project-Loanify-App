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
import { Link } from 'react-router-dom';
import jane from './assets/jane.png';
import notification from './assets/bell.svg';
import './sidebar.css';
import settings from './assets/settings-not.svg';
import CheckIcon from '@mui/icons-material/Check';

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
    right: 120,
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

export default function NotificationDialog() {
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
        <img src={notification} className="notify-icon" alt="" />
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h1 className="sms">Notifications</h1>
        </BootstrapDialogTitle>
        <h4 className="newMessages">New</h4>
        {not.map((not, i) => {
          return (
            <div className="dialog-box" key={i}>
              <img src={not.src} className="jane" alt="" />
              <p style={{ fontSize: '14px' }}>{not.text}</p>
              <div className="span-box">&nbsp;</div>
            </div>
          );
        })}
        <hr style={{ marginTop: '20px' }} />
        <div className="dialog-box">
          <Link to="/settings/Notifications">
            <img src={settings} alt="" />
          </Link>
          <div className="allRead">
            <CheckIcon />
            <h5>Mark all as read.</h5>
          </div>
          <Link to="/notification" className="sms-btn  notify-btn">
            View all Notifications
          </Link>
        </div>
      </BootstrapDialog>
    </div>
  );
}

const not = [
  {
    src: jane,
    text: 'Jane Doe applied for a loan extension',
  },
  {
    src: jane,
    text: 'Jane Doe applied for a loan extension',
  },
  {
    src: jane,
    text: 'Jane Doe applied for a loan extension',
  },
  {
    src: jane,
    text: 'Jane Doe applied for a loan extension',
  },
  {
    src: jane,
    text: 'Jane Doe applied for a loan extension',
  },
  {
    src: jane,
    text: 'Jane Doe applied for a loan extension',
  },
];
