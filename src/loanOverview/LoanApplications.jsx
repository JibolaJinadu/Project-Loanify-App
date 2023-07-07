import React from 'react';
import './LoanApplications.css';

const LoanApplications = () => {
  return (
    <div>
        <h5>Loan Information</h5>
        <form>
             <div className='flex-container'>
                <p>Loan Amount</p>
                <label><input type='text' placeholder='NGN550,000'></input></label>
            </div>
            <div className='flex-container'>
                <p>Purpose of the Loan</p>
                <label><input type='text' placeholder='Business'></input></label>
            </div>
            <div className='flex-container'>
                <p>Repayment Method</p>
                <label><input type='text' placeholder='Monthly'></input></label>
            </div>
            <div className='flex-container'>
                <p>Do you have any outstanding loan to be repaid?</p>
                <label><input type='text' placeholder='Yes'></input></label>
            </div>
            <div className='flex-container'>
                <p>If yes, please state the amount</p>
                <label><input type='text' placeholder='NGN550,000'></input></label>
            </div>
            <div className='flex-container'>
                <p>How much is the amount left to be paid?</p>
                <label><input type='text' placeholder='NGN75,000'></input></label>
            </div>
            <div className='flex-container'>
                <p>Is the loan with our institution?</p>
                <label><input type='text' placeholder='No'></input></label>
            </div>
        </form>
        <h5 className='cfi'>Current Financial Information</h5>
        <form className='form-setting'>
            <div>
                <label>Gross Monthly Revenue
                    <input type='text' placeholder='NGN450,000'></input>
                </label>

                <label>Average Monthly Profit
                    <input type='text' placeholder='NGN450,000'></input>
                </label>
            </div>
            <div>
                <label>Gross Monthly Expenses
                    <input type='text' placeholder='NGN300,000'></input>
                </label>
                <label>Average Monthly Profit
                    <input type='text' placeholder='NGN320,000'></input>
                </label>
            </div>
            <div>
                <label>Gross Annual Revenue
                    <input type='text' placeholder='NGN5,400,000'></input>
                </label>
                <label>Net Monthly Profit
                    <input type='text' placeholder='NGN420,000'></input>
                </label>
            </div>
        </form>
        <h5 className='cfi'>Bank Information</h5>
        <form className='form-setting'>
            <div>
               <label>Account Name
                    <input type='text' placeholder='Temidayo Adebayo'></input>
                </label>
            </div>
            <div>
            <label>Account Number
                    <input type='text' placeholder='004567210'></input>
            </label>
            </div>
            <div>
            <label>Bank Name
                    <input type='text' placeholder='Fidelity Bank'></input>
            </label>
            </div>
        </form>
    </div>
  )
}

export default LoanApplications