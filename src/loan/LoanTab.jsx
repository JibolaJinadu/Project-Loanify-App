import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LoanHeader from '../loanHeader/LoanHeader';
import LoanTable from './LoanTable.jsx';
import { useState, useRef, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoanTab = ({ onTabChange }) => {
  const { loginToken } = React.useContext(AuthContext);
  const [tableData, setTableData] = useState([]);
  const table = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(event, newValue);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };

  const [allLoans, setAllLoans] = useState([]);
  const [pendingLoans, setPendingLoans] = useState([]);
  const [newApplication, setNewApplication] = useState([]);
  const [active, setActive] = useState([]);
  const [due, setDue] = useState([]);
  const [defaulted, setDefaulted] = useState([]);
  const [closed, setClosed] = useState([]);
  const [approved, setApproved] = useState([]);
  const [extended, setExtended] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (loginToken) {
        try {
          const requests = [
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=PENDING&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=APPROVED&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=CLOSED&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=EXTENDED&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=DEFAULTED&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=DUE&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?perPage=50`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans?status=NEW&perPage=10`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
          ];

          const responses = await Promise.all(requests);
          console.log(responses);
          setPendingLoans(responses[0].data.data);
          setApproved(responses[1].data.data);
          setClosed(responses[2].data.data);
          setExtended(responses[3].data.data);
          setDefaulted(responses[4].data.data);
          setDue(responses[5].data.data);
          setAllLoans(responses[6].data.data);
          setNewApplication(responses[7].data.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          toast.error("Couldn't fetch wallet details");
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [loginToken]);

  console.log(pendingLoans);

  const [allLoansFilter, setAllLoansFilter] = useState([]);
  const [approvedFilter, setApprovedFilter] = useState([]);
  const [dueFilter, setDueFilter] = useState([]);
  const [extendedFilter, setExtendedFilter] = useState([]);
  const [closedFilter, setClosedFilter] = useState([]);
  const [defaultedFilter, setDefaultedFilter] = useState([]);
  const [pendingFilter, setPendingFilter] = useState([]);
  const filterData = (data, searchQuery, filterStatus) => {
    return data.filter((row) => {
      const firstName = row.lender.firstName.toLowerCase();
      const lastName = row.lender.lastName.toLowerCase();
      const loanStatus = row.status.toLowerCase();
      const applicationNumber = row.castNumber.toLowerCase();

      return (
        (firstName.includes(searchQuery.toLowerCase()) ||
          lastName.includes(searchQuery.toLowerCase()) ||
          applicationNumber.includes(searchQuery.toLowerCase())) &&
        (filterStatus === '' || loanStatus === filterStatus.toLowerCase())
      );
    });
  };

  useEffect(() => {
    const filteredData = filterData(allLoans, searchQuery, filterStatus);
    setAllLoansFilter(filteredData);
  }, [allLoans, searchQuery, filterStatus]);
  useEffect(() => {
    const filteredData = filterData(approved, searchQuery, filterStatus);
    setApprovedFilter(filteredData);
  }, [approved, searchQuery, filterStatus]);
  useEffect(() => {
    const filteredData = filterData(pendingLoans, searchQuery, filterStatus);
    setPendingFilter(filteredData);
  }, [pendingLoans, searchQuery, filterStatus]);
  useEffect(() => {
    const filteredData = filterData(due, searchQuery, filterStatus);
    setDueFilter(filteredData);
  }, [due, searchQuery, filterStatus]);
  useEffect(() => {
    const filteredData = filterData(extended, searchQuery, filterStatus);
    setExtendedFilter(filteredData);
  }, [extended, searchQuery, filterStatus]);
  useEffect(() => {
    const filteredData = filterData(defaulted, searchQuery, filterStatus);
    setDefaultedFilter(filteredData);
  }, [defaulted, searchQuery, filterStatus]);
  useEffect(() => {
    const filteredData = filterData(closed, searchQuery, filterStatus);
    setClosedFilter(filteredData);
  }, [closed, searchQuery, filterStatus]);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <LoanHeader
        table={table}
        tableData={tableData}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        filterStatus={filterStatus}
        handleFilterStatus={handleFilterStatus}
      />
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
        scrollButtons={!isLargeScreen && 'auto'}
        aria-label="scrollable prevent tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
          },
          '& .Mui-selected': {
            borderBottom: 'none',
          },
          borderTop: '1px solid #83a1e8',
          borderRight: '1px solid #83a1e8',
          borderLeft: '1px solid #83a1e8',
          margin: '0 20px',
        }}
      >
        <div
          style={{ borderBottom: '1px solid #83a1e8', padding: '5px' }}
        ></div>
        <Tab
          label="All Loans"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="New Applications"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Pending"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Approved"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Due loan"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Extended"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Defaulted"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <Tab
          label="Closed"
          sx={{
            '&.Mui-selected': {
              color: '#010E2A',
              marginTop: '10px',
              borderBottom: '0',
              borderTop: '1px solid #83a1e8',
              borderLeft: '1px solid #83a1e8',
              borderRight: '1px solid #83a1e8',
            },
            color: '#010E2A',
            fontWeight: '700',
            textTransform: 'none',
            fontSize: '15px',
            borderBottom: '1px solid #83a1e8',
          }}
        />
        <div
          style={{ borderBottom: '1px solid #83a1e8', padding: '5px' }}
        ></div>
      </Tabs>
      <TabPanel value={value} index={1}>
        <LoanTable tableData={allLoansFilter} table={table} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoanTable tableData={newApplication} table={table} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LoanTable tableData={pendingFilter} table={table} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <LoanTable tableData={approvedFilter} table={table} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <LoanTable tableData={dueFilter} table={table} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <LoanTable tableData={extendedFilter} table={table} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <LoanTable tableData={defaultedFilter} table={table} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <LoanTable tableData={closedFilter} table={table} />
      </TabPanel>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={2.5}>{children}</Box>}
    </Typography>
  );
}

export default LoanTab;
