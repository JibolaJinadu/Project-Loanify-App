import React, { useState } from 'react';
import './GeneralInfo.css';

const GeneralInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [date, setDate] = useState('');
  const [aviation, setAviation] = useState('');
  const [profession, setProfession] = useState('');
  const [mail, setMail] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };
  const handleHomeAddressChange = (event) => {
    setHomeAddress(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleAviationChange = (event) => {
    setAviation(event.target.value);
  };
  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'Submitted:',
      firstName,
      middleName,
      lastName,
      gender,
      dateOfBirth,
      maritalStatus,
      email,
      phoneNumber,
      phoneNo,
      homeAddress,
      date
    );
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setGender('');
    setDateOfBirth('');
    setMaritalStatus('');
    setEmail('');
    setPhoneNumber('');
    setPhoneNo('');
    setHomeAddress('');
    setDate('');
    setAviation('');
    setProfession('');
    setMail('');
  };

  return (
    <div>
      <h5>Personal Information</h5>
      <form className="personal-information-form" onSubmit={{ handleSubmit }}>
        <div className="form-settings">
          <div>
            <label>
              <input
                type="text"
                value={firstName}
                placeholder="Temidayo"
                onChange={handleFirstNameChange}
              ></input>
            </label>
            <label>
              <select value={gender} onChange={handleGenderChange}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </label>
            <label>
              <input
                type="text"
                value={email}
                placeholder="temidayo.bayo@gmail.com"
                onChange={handleEmailChange}
                required
              ></input>
            </label>
            <label>
              <input
                type="text"
                value={homeAddress}
                placeholder="Olowoporoku Close Gbagada Estate,Lagos"
                onChange={handleHomeAddressChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                value={middleName}
                placeholder="Middle Name(optional)"
                onChange={handleMiddleNameChange}
              ></input>
            </label>
            <label>
              <input
                type="text"
                value={dateOfBirth}
                placeholder="04/12/1975"
                onChange={handleDateOfBirthChange}
              ></input>
            </label>
            <label>
              <input
                type="text"
                value={phoneNumber}
                placeholder="09055555558"
                onChange={handlePhoneNumberChange}
              ></input>
            </label>
          </div>
          <div>
            <label>
              <input
                type="text"
                value={lastName}
                placeholder="Adebayo"
                onChange={handleLastNameChange}
              />
            </label>
            <label>
              <select
                value={maritalStatus}
                onChange={handleMaritalStatusChange}
              >
                <option value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="Divorced">Divorced</option>
                <option value="Widow">Widow</option>
              </select>
            </label>
            <label>
              <input
                type="text"
                value={phoneNo}
                placeholder="237569103853"
                onChange={handlePhoneNoChange}
              />
            </label>
            <label>
              <input
                type="text"
                value={date}
                placeholder="02/01/2015"
                onChange={handleDateChange}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
