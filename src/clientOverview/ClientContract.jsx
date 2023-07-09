import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import ClientContractForm from './ClientContractForm';

export default function ClientContract() {
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
              <Link className="breadcrumbs" to="/clients">
                Clients
              </Link>
              <Link className="breadcrumbs" to="/clients/clients-overview">
                Clients Overview
              </Link>
              <p className="breadcrumbs">Clients Contract</p>
            </Breadcrumbs>
          </div>
          <ClientContractForm />
        </Box>
      </Box>
    </div>
  );
}
