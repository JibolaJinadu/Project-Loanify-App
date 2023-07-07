import React from 'react';
import './loan.css';
import { Link, useNavigate } from 'react-router-dom';

const LoanTable = ({ tableData, table }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/loans/loans-overview');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'cpproved':
        return 'loans-approved';
      case 'closed':
        return 'loans-closed';
      case 'pending':
        return 'loans-pending';
      case 'approved':
        return 'loans-active';
      case 'defaulted':
        return 'loans-defaulted';
      case 'due':
        return 'loans-due';
      case 'extended':
        return 'loans-extended';
      case 'Incomplete Docs':
        return 'loans-incomplete-docs';
      case 'Received Docs':
        return 'loans-received-docs';
      default:
        return '';
    }
  };

  const formatStatus = (status) => {
    const formattedStatus =
      status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
    return formattedStatus;
  };
  const formatCast = (castNumber) => {
    const formattedCast =
      castNumber.charAt(0).toUpperCase() + castNumber.slice(1).toLowerCase();
    return formattedCast;
  };

  if (tableData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="loan-container">
      <table ref={table} id="loan">
        <thead>
          <tr>
            <th>
              <input type="checkBox"></input>
            </th>
            <th>Case Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Application Date</th>
            <th>Recent Update</th>
            <th>Loan Status</th>
          </tr>
        </thead>
        <tr className="padtap">&nbsp;</tr>
        <tbody>
          {tableData.map((row, index) => (
            <tr className="blue-row" key={row.id} onClick={handleRowClick}>
              <td>
                <input type="checkBox"></input>
              </td>
              <td>{formatCast(row.castNumber)}</td>
              <td>{row.lender.firstName}</td>
              <td>{row.lender.lastName}</td>
              <td>{formatDate(row.createdAt)}</td>
              <td>{formatDate(row.updatedAt)}</td>
              <td>
                <button className={getStatusColor(row.status.toLowerCase())}>
                  {formatStatus(row.status)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTable;
