import React, { useState } from 'react';
import './LoanApp.css';

const CollateralInformation = () => {
    const [collateralType, setCollateralType] = useState('');
    const [collateralName, setCollateralName] = useState('');
    const [modelNo, setModelNo] = useState('');
    const [yearOfPurchase, setYearOfPurchase] = useState('');
    const [currentMarketValue, setCurrentMarketValue] = useState('');
    const [modelColor, setModelColor] = useState('');
    
    const handleCollateralTypeChange = (event) => {
      setCollateralType(event.target.value);
    };
    const handleCollateralName = (event) => {
      setCollateralName(event.target.value);
    };
    const handleModelNoChange = (event) => {
      setModelNo(event.target.value);
    };
    const handleModelColorChange = (event) => {
      setModelColor(event.target.value);
    };
    const handleYearOfPurchaseChange = (event) => {
      setYearOfPurchase(event.target.value);
    };
    const handleCurrentMarketValueChange = (event) => {
      setCurrentMarketValue(event.target.value);
    };
  
    const handleSubmits = (event) => {
        event.preventDefault();
        console.log(
          'Submit:',
          collateralType,
          collateralName,
          modelNo,
          yearOfPurchase,
          currentMarketValue,
          modelColor,
          );
    
          setCollateralType('');
        setCollateralName('');
        setModelNo(''),
        setYearOfPurchase('');
        setCurrentMarketValue('');
        setModelColor('');
      };

  return (
    <div>
                <form className="loan-app-form">
            <div className="form-settings spaced-up">
            <div>
            <label>
                Collateral Type <br />
              <input
                type="text"
                value={collateralType}
                placeholder="Vehicle"
                onChange={handleCollateralTypeChange}
              ></input>
            </label>
            <label>
                Year Of Purchase <br />
              <input
                type="text"
                value={yearOfPurchase}
                placeholder="2019"
                onChange={handleYearOfPurchaseChange}
              ></input>
            </label>
            </div>
            <div>
            <label>
                Collateral Name <br />
              <input
                type="text"
                value={collateralName}
                placeholder="NGN 450,000"
                onChange={handleCollateralName}
              ></input>
            </label>
            <label>
                Current Market Value <br />
              <input
                type="text"
                value={currentMarketValue}
                placeholder="NGN 450,000"
                onChange={handleCurrentMarketValueChange}
              ></input>
            </label>
            <div className='ownership-proof'>
          
            <label htmlFor="Submit">
            <a  className='proof' href="http://">Proof of ownership</a>
            </label>
            </div>
            </div>
            <div>
            <label>
                Model No <br />
              <input
                type="text"
                value={modelNo}
                placeholder="E210"
                onChange={handleModelNoChange}
              ></input>
            </label>
            <label>
                Model Color <br />
              <input
                type="text"
                value={modelColor}
                placeholder="Silver"
                onChange={handleModelColorChange}
              ></input>
            </label>
            </div>
            </div>
            
        </form>
    </div>
  )
}

export default CollateralInformation