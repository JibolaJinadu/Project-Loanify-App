import React, { useState } from 'react';
import './LoanContractForm.css';

function LoanContractForm () {
    const [agreement, setAgreement ] = useState('')
    const [officials, setOfficials] = useState('')
    const [law, setLaw] = useState('')
    const [borrowerName, setBorrowerName] = useState('')
    const [borrowerSignature, setBorrowerSignature] = useState('')
    const [borrowerDate, setBorrowerDate] = useState('')
    const [lenderName, setLenderName] = useState('')
    const [lenderSignature, setLenderSignature] = useState('')
    const [lenderDate, setLenderDate] = useState('')


    
    const handleAgreement = (event) => {
      setAgreement(event.target.value);
    };
    const handleOfficials = (event) => {
      setOfficials(event.target.value);
    };
    const handleLaw = (event) => {
      setLaw(event.target.value);
    };
    const handleBorrowerName = (event) => {
      setBorrowerName(event.target.value);
    };
    const handleBorrowerSignature = (event) => {
      setBorrowerSignature(event.target.value);
    };
    const handleBorrowerDate = (event) => {
      setBorrowerDate(event.target.value);
    };
    const handleLenderName = (event) => {
      setLenderName(event.target.value);
    };
    const handleLenderSignature = (event) => {
      setLenderSignature(event.target.value);
    };
    const handleLenderDate = (event) => {
      setLenderDate(event.target.value);
    };



    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(
        'Submitted:',
        agreement,
        officials,
        law,
        borrowerName,
        borrowerSignature,
        borrowerDate,
        lenderName,
        lenderSignature,
        lenderDate,
      );

      setAgreement('');
      setOfficials('');
      setLaw('');
      setBorrowerName('');
      setBorrowerSignature('');
      setBorrowerDate('');
      setLenderName('');
      setLenderSignature('');
      setLenderDate('');
    };
  
  return (
    <section>
      <h3>Loan Contracts</h3>
      <div className='loan-contract'>
        <div>
        <div className='print-button'>
          <button className='print-btn'>Print</button>
          <button className='edit-btn'>Edit Document</button>
        </div>
        <div className='return-button' >
          <button className='return-btn'>Return To Documents</button>
        </div>
        </div>
      <div className='contract-container'>
      <div className='white-background'>
      <h4>GOVERNING LAW</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <p>- This Agreement shall be governed by and construed in accordance with the laws of  <input
                type="text"
                value={agreement}
                onChange={handleAgreement}
                className='form-text'
              ></input>.
          </p>
          <h4>ALTERNATIVE DISPUTE RESOLUTION</h4>
          <p>
           - Any dispute or difference whatsoever arising out of or in connection with this Agreement shall be submitted to <input
                type="text"
                value={officials}
                onChange={handleOfficials}
                className='form-text'
              ></input> (Arbitration/mediation/negotiation) (Circle one) in accordance with, and subject to the laws of <input
              type="text"
              value={law}
              onChange={handleLaw}
              className='form-text'
              ></input>.
          </p>
          <h4>ENTIRE AGREEMENT</h4>
          <p>
          - This Agreement contains the entire agreement and understanding among the Parties hereto with respect to the subject matter hereof,
           and supersedes all prior agreements, understandings, inducements and conditions, express or implied, oral or written, of any nature whatsoever with respect to the subject matter hereof. The express terms hereof 
          control and supersede any course of performance and/or usage of the trade inconsistent with any of the terms hereof.
          </p>
          <h4>OWNERSHIP</h4>
          <p>
          - The Parties agree that this Agreement is not transferable unless a written consent is provided by both Parties of this Agreement.
          </p>
          <h4>SEVERABILITY</h4>
          <p>
          - In an event where any provision of this Agreement is found to be void and unenforceable by a court of competent jurisdiction,
           then the remaining provisions will remain to be enforced in accordance with the Parties’ intention.
          </p>
          <h4>SIGNATURE AND DATE</h4>
          <p>
            - The Parties hereby agree to the terms and conditions set forth in this Agreement and such is demonstrated throughout by their signatures below:
          </p>
          <div>
            <label>BORROWER Name:</label>
            <input type="text" 
            value={borrowerName}
            onChange={handleBorrowerName}
            className='form-text'
             />
          </div>
          <div>
            <label>Signature:</label>
            <input type="text" 
            value={borrowerSignature}
            onChange={handleBorrowerSignature}
            className='form-text'
             />
          </div>
          <div>
            <label>Date:</label>
            <input type="text" 
             value={borrowerDate}
             onChange={handleBorrowerDate}
             className='form-text'
             />
          </div>
          <div className='data-input'></div>
          <div>
            <label>LENDER Name:</label>
            <input type="text" 
            value={lenderName}
            onChange={handleLenderName}
            className='form-text'
            />
          </div>
          <div>
          <label>Signature:</label>
            <input type="text" 
            value={lenderSignature}
            onChange={handleLenderSignature}
            className='form-text'
             />
          </div>
          <div>
          <label>Date:</label>
            <input type="text" 
             value={lenderDate}
             onChange={handleLenderDate}
             className='form-text'
             />
          </div>
          <div className='data-input'></div>
          </div>
        </form>
      </div>
    </div>
      </div>
    </section>
    
  )
}

export default LoanContractForm;