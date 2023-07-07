import React from 'react'
import {Details} from '../loan/Details'
import './pending.css'

const Pending = () => {
  return (
    <div className='loan-container'>
    <table id='loan'>
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
    <tbody>
    {Details.map((Details) =>(
        <tr>
        <td>
          <input type="checkBox"></input>
        </td>
        <td>{Details.caseNumber}</td>
        <td>{Details.firstName}</td>
        <td>{Details.lastName}</td>
        <td>{Details.applicationDate}</td>
        <td>{Details.recentUpdate}</td>
        <td>{Details.loanStatus}</td>
        </tr>
         ))}
    </tbody>
    </table>
</div>
  )
}

export default Pending