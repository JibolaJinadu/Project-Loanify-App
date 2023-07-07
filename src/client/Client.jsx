import React, { useState, useRef, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Client.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ClientDialog from './ClientDialog';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext';

const Client = () => {
  const { loginToken, setLoginToken } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const filteredTableData = (data) => {
    return data.filter((row) => {
      const fullName = row.lender?.fullName?.toLowerCase();
      const loanStatus = row.status?.toLowerCase();
      const applicationNumber = row.castNumber?.toLowerCase();

      return (
        (fullName &&
          searchQuery &&
          fullName.startsWith(searchQuery.toLowerCase())) ||
        (applicationNumber &&
          searchQuery &&
          applicationNumber.startsWith(searchQuery.toLowerCase()))
      );
    });
  };

  const filteredData = filteredTableData(tableData);

  const handlePrint = () => {
    window.print();
  };

  const table = useRef(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'clients-approved';
      case 'due':
        return 'clients-due';
      case 'declined':
        return 'clients-declined';
      case 'defaulted':
        return 'clients-defaulted';
      case 'extended':
        return 'clients-extended';
      case 'closed':
        return 'clients-closed';
      default:
        return '';
    }
  };

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/clients/clients-overview');
  };

  const GetClients = async () => {
    if (loginToken) {
      try {
        const response = await axios.get(
          `https://loanifyteama-production.up.railway.app/api/v1/loans?perPage=50`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
          }
        );
        console.log(response.data.data); // Check the type of response.data
        setTableData(response.data.data);
        // toast.success('Profile Update!');
      } catch (error) {
        console.log(error);
        // toast.error("Couldn't update profile data!");
      }
    }
  };

  useEffect(() => {
    GetClients();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const formatStatus = (status) => {
    const formattedStatus =
      status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
    return formattedStatus;
  };

  return (
    <Box sx={{ display: 'flex', margin: '0 20px' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div role="presentation">
          <Breadcrumbs
            separator={<ChevronRightIcon />}
            aria-label="breadcrumb"
            sx={{
              backgroundColor: '#F0F4FC',
              margin: '0 20px 10px',
              padding: '10px 5px',
            }}
          >
            <Link to="/dashboard" className="breadcrumbs">
              Home
            </Link>
            <p className="breadcrumbs">Clients</p>
          </Breadcrumbs>
        </div>

        <div className="client-info">
          <div className="search-wrapper">
            <div className="search-box">
              <div className="search">
                <SearchIcon />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="search-filter">
                <select
                  className="filter-select"
                  value={filterStatus}
                  onChange={handleFilterStatus}
                >
                  <option value="">All</option>
                  <option value="Approved">Approved</option>
                  <option value="Due">Due</option>
                  <option value="Declined">Declined</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="search-print">
              <button className="btn-print" onClick={handlePrint}>
                Print
              </button>
              <ClientDialog table={table} tableData={tableData} />
            </div>
          </div>
          <table ref={table} id="clients">
            <thead>
              <tr id="clients-row">
                <th>
                  <input
                    type="checkBox"
                    className="clients-input"
                    disabled
                  ></input>
                </th>
                <th>Application Number</th>
                <th id="client-name">Full Name</th>
                <th>Loan Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tr className="padtap">&nbsp;</tr>
            <tbody id="client-data">
              {tableData.map((row, index) => {
                const fullName =
                  `${row.lender?.firstName} ${row.lender?.lastName}` ?? '';
                console.log('fullName');
                return (
                  <tr
                    className="client-row"
                    key={index}
                    onClick={handleRowClick}
                  >
                    <td>
                      <Link to="/clients/clients-overview">
                        <input
                          type="checkbox"
                          disabled
                          className="clients-input"
                        ></input>
                      </Link>
                    </td>
                    <td>{row.castNumber}</td>
                    <td>{fullName}</td>
                    <td>
                      <button
                        className={` ${getStatusColor(
                          row.status.toLowerCase()
                        )}`}
                      >
                        {formatStatus(row.status)}
                      </button>{' '}
                    </td>
                    <td>{formatDate(row.lender.createdAt)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  );
};

export default Client;
