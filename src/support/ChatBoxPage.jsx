import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Support.css';

const ChatBoxPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

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
              <Link className="breadcrumbs" to="/support">
                Support
              </Link>
              <p className="breadcrumbs">Chat-box</p>
            </Breadcrumbs>
          </div>
          <div className="chatbox-container">
            <div className="chatbox-header">
              <h2>Customer Support Chat</h2>
            </div>
            <div className="chatbox-messages">
              {messages.map((message, index) => (
                <div key={index} className="chatbox-message">
                  {message}
                </div>
              ))}
            </div>
            <div className="chatbox-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={handleMessageSend}>Send</button>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBoxPage;
