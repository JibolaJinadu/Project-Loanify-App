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
import mail from './assets/envelope.svg';
import { Link } from 'react-router-dom';
import jane from './assets/jane.png';
import './sidebar.css';

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
    right: 150,
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

export default function MessageDialog() {
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
        <img src={mail} alt="" />
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
          <h1 className="sms">Messages</h1>
        </BootstrapDialogTitle>
        <h4 className="newMessages">New Messages</h4>
        {msg.map((msg, i) => {
          return (
            <div className="dialog-box" key={i}>
              <img src={msg.src} className="jane" alt="" />
              <div className="dialog-title">
                <p style={{ fontSize: '14px' }}>{msg.name}</p>
                <p style={{ fontSize: '14px' }}>
                  {msg.text} <span>{msg.time}</span>
                </p>
              </div>
            </div>
          );
        })}
        <hr style={{ marginTop: '20px' }} />
        <Link to="/messages" className="sms-btn">
          View all messages
        </Link>
      </BootstrapDialog>
    </div>
  );
}

const msg = [
  {
    name: 'Jane',
    src: jane,
    time: '1hr',
    text: 'Hello, please have you had a chan...',
  },
  {
    name: 'Jane',
    src: jane,
    time: '1hr',
    text: 'Hello, please have you had a chan...',
  },
  {
    name: 'Jane',
    src: jane,
    time: '1hr',
    text: 'Hello, please have you had a chan...',
  },
];
