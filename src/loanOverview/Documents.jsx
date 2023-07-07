import React from 'react'
import './Documents.css'
import { Link } from 'react-router-dom';


const Documents = () => {
  return (
    <div>
        <div className='documents'>
            <p>Loan Agreement</p>
           <Link to='/loans/loans-overview/loans-contract'><button className='open-file'>Open File</button></Link>
        </div>
        <div className='documents'>
            <p>Driver's License</p>
            <button className='open-file'>Open File</button>
        </div>
        <div className='documents'>
            <p>Birth Certificate</p>
            <button className='open-file'>Open File</button>
        </div>
        <div className='documents'>
            <p>Passport</p>
            <button className='open-file'>Open File</button>
        </div>
        <div className='documents'>
            <p>Bank Statement</p>
            <button className='open-file'>Open File</button>
        </div>
        <div className='documents'>
            <p>Tenancy Agreement</p>
            <button className='open-file'>Open File</button>
        </div>
        <div className='documents'>
            <p>Utility Bill</p>
            <button className='open-file'>Open File</button>
        </div>
        <div className='documents'>
            <p>Collateral Documents</p>
            <button className='open-file'>Open File</button>
        </div>
    </div>
  )
}

export default Documents