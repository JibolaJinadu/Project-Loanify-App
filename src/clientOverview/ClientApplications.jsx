import React, { useState } from 'react';
import './ClientApplications.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HiChevronDown } from 'react-icons/hi2';
import LoanApp from './LoanApp';
import CollateralInformation from './CollateralInformation';

const ClientApplications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectItems, setSelectItems] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [selectValues, setSelectValues] = useState([]);

  const toggleDropdownOne = () => {
    setIsVisible(!isVisible);
  };

  const selectItem = (value) => setSelectedItems([...selectedItems, value]);

  const toggleDropdownTwo = () => {
    setIsOpen(!isOpen);
  };

  const selectItemTwo = (value) => setSelectItems([...selectItems, value]);

  const toggleDropdownThree = () => {
    setIsDisplayed(!isDisplayed);
  };

  const selectItemThree = (value) => setSelectValues([...selectValues, value]);

  return (
    <section className="clientContainer">
      <div>
        <div className="dropDown">
          <button className="loan-btn">
            <div className="arrow-icon">
              <h3>Loan Application History</h3>
              <KeyboardArrowDownIcon
                onClick={toggleDropdownOne}
                className="pointer"
              />
            </div>
          </button>
        </div>
        <div className="spacing"></div>

        {isVisible && (
          <div className="infoDetails">
            <div className="details-title">
              <h5>Case Number</h5>
              <h5>Loan Amount</h5>
              <h5>Balance</h5>
              <h5>Next Payment Date</h5>
              <h5>Payoff Progress</h5>
            </div>
            <div className="spacing"></div>
            <div className="details">
              <p id="case-number">RRZU9D6BVG</p>
              <p>500,000</p>
              <p>750,000</p>
              <p>08/12/2023</p>
              <p>
                <div className="progress-one">
                  <div className="progress-bar">
                    <span className="textName">90%</span>
                  </div>
                </div>
              </p>
            </div>
            <div className="spacing"></div>
            <div className="details">
              <p id="case-number">RRZU9E6ATY</p>
              <p>200,000</p>
              <p>N/A</p>
              <p>N/A</p>
              <p>
                <div className="progress">
                  <div className="progressBar">
                    <span className="textName">100%</span>
                  </div>
                </div>
              </p>
            </div>
            <div className="spacing"></div>
            <div className="details">
              <p id="case-number">RRZU9F8ZXP</p>
              <p>120,000</p>
              <p>N/A</p>
              <p>N/A</p>

              <p>
                <div className="progress">
                  <div className="progressBar">
                    <span className="textName">100%</span>
                  </div>
                </div>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="spacing">
        <div className="dropDown">
          <button className="loan-btn">
            <div className="arrow-icon">
              <h3>Loan Application Information</h3>
              <KeyboardArrowDownIcon
                onClick={toggleDropdownTwo}
                className="pointer"
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div>
            <LoanApp />
          </div>
        )}
      </div>
      <div>
        <div className="dropDown">
          <button className="loan-btn">
            <div className="arrow-icon">
              <h3>Collateral Information</h3>
              <KeyboardArrowDownIcon
                onClick={toggleDropdownThree}
                className="pointer"
              />
            </div>
          </button>
        </div>
        {isDisplayed && (
          <div>
            <CollateralInformation />
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientApplications;
