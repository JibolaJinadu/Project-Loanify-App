import React, { useState } from 'react';
import './LoanApp.css';

const CollateralInformation = () => {
    const [collateralType, setCollateralType] = useState('');
    const [collateralName, setCollateralName] = useState('');
    const [modelNo, setModelNo] = useState('');
    const [yearOfPurchase, setYearOfPurchase] = useState('');
    const [currentMarketValue, setCurrentMarketValue] = useState('');
    const [modelColor, setModelColor] = useState('');
    const [proofOfOwnership, setProofOfOwnership] = useState('');
    
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
    const handleProofOfOwnership = (event) => {
      setProofOfOwnership(event.target.value);
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
          proofOfOwnership,
          );
    
          setCollateralType('');
        setCollateralName('');
        setModelNo(''),
        setYearOfPurchase('');
        setCurrentMarketValue('');
        setModelColor('');
        setProofOfOwnership('');
      };

  return (
    <div className='clientsPadding'>
      <form onSubmit={{ handleSubmits }}>
        <div className='client-container'>
            <div>
              <div className='label-settings'>
              <label>Collateral Type</label>
              <input
                type="text"
                value={collateralType}
                placeholder="Vehicle"
                onChange={handleCollateralTypeChange}
              ></input>
              </div>
            
               <div className='label-settings'>
              <label>Year Of Purchase</label>
              <input
                type="text"
                value={yearOfPurchase}
                placeholder="2019"
                onChange={handleYearOfPurchaseChange}
              ></input>
            </div>
            </div>

            <div>
              <div className='label-settings'>
              <label>Collateral Name</label>
              <input
                type="text"
                value={collateralName}
                placeholder="NGN 450,000"
                onChange={handleCollateralName}
              ></input>
              </div>

              <div className='label-settings'>
              <label> Current Market Value</label>
              <input
                type="text"
                value={currentMarketValue}
                placeholder="NGN 450,000"
                onChange={handleCurrentMarketValueChange}
              ></input>
            
              </div>
            
              <div className='ownership-proof'>
             <button type="submit" className='proof-button'>Proof of Ownership</button>
             </div>
             </div>


            <div>
              <div  className='label-settings'>
              <label>Model No </label>
              <input
                type="text"
                value={modelNo}
                placeholder="E210"
                onChange={handleModelNoChange}
              ></input>
              </div>

              <div className='label-settings'>
              <label>Model Color </label>
              <input
                type="text"
                value={modelColor}
                placeholder="Silver"
                onChange={handleModelColorChange}
              ></input>
              </div>
           
            </div>
            
            </div>
        </form>
    </div>
  )
}

export default CollateralInformation