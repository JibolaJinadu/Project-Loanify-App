import { useState } from 'react';
import ClientDialog from '../client/ClientDialog';
import SearchIcon from '@mui/icons-material/Search';
import './LoanHeader.css';
import { Dialog } from '@mui/material';
import FilterModal from '../components/FilterModal';

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
        <FilterModal
          filterStatus={filterStatus}
          handleFilterStatus={handleFilterStatus}
        />
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
