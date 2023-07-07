import { useState } from 'react';
import { Search } from '@mui/icons-material';
import ClientDialog from '../client/ClientDialog';
import './LoanHeader.css';

const LoanHeader = ({
  table,
  tableData,
  searchQuery,
  handleSearch,
  filterStatus,
  handleFilterStatus,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="loan-header">
      <div className="loan-search">
        <input
          type="search"
          placeholder="Search"
          className="search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="search-filter">
          <select
            className="filter-select"
            value={filterStatus}
            onChange={handleFilterStatus}
          >
            <option value="">All</option>
            <option value="Approved">Approved</option>
            <option value="Incomplete Docs">Incomplete Docs</option>
            <option value="Received Docs">Received Docs</option>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Due">Due</option>
            <option value="Extended">Extended</option>
            <option value="Defaulted">Defaulted</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>
      <div className="loan-print">
        <button className="print" onClick={handlePrint}>
          Print
        </button>
        <ClientDialog table={table} tableData={tableData} />
      </div>
    </div>
  );
};

export default LoanHeader;
