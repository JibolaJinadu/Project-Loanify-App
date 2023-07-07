import React, { useState } from 'react';
import './GeneralInformation.css' ;


const GeneralInformation = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [work, setWork] = useState('');
  const [placeofwork, setPlaceOfWork] = useState('');
  const [address, setAddress] = useState('');
  const [nin, setNin] = useState('');
  const [endDate, setEndDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');

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
  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };
  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };
  const handleWorkEmailChange = (event) => {
    setWorkEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleHomeAddressChange = (event) => {
    setHomeAddress(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };
  const handlePlaceOfWorkChange = (event) => {
    setPlaceOfWork(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handleNinChange = (event) => {
    setNin(event.target.value);
  };
  const handlePhysicalAddressChange = (event) => {
    setPhysicalAddress(event.target.value);
  };
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmploymentStatusChange = (event) => {
    setEmploymentStatus(event.target.value);
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
      emailAddress,
      maritalStatus,
      email,
      workEmail,
      phoneNumber,
      homeAddress,
      date,
      number,
      birthDate,
      work,
      nin,
      endDate,
      placeofwork,
      address,
      physicalAddress,
      jobTitle,
      fullName,
      employmentStatus
    );
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setGender('');
    setDateOfBirth('');
    setEmailAddress('');
    setMaritalStatus('');
    setEmail('');
    setPhoneNumber('');
    setHomeAddress('');
    setDate('');
    setWork('');
    setNumber('');
    setNin('');
    setEndDate('');
    setBirthDate('');
    setPlaceOfWork('');
    setAddress('');
    setPhysicalAddress(''), setJobTitle('');
    setFullName('');
    setEmploymentStatus('');
  };

  return (
    <div className="general">
      <h5>Personal Information</h5>
      <form className="personal-information-form" onSubmit={{ handleSubmit }}>
        <div className="form-settings">
          <div>
            <div className='label-settings'>
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                placeholder="Temidayo"
                onChange={handleFirstNameChange}
              ></input>
            </div>

            <div className='label-settings'>
              <label>Sex</label>
              <input
                type="text"
                value={gender}
                placeholder="Female"
                onChange={handleGenderChange}
              ></input>
            </div>

            <div className='label-settings'>
            <label>Email Address</label>
              <input
                type="text"
                value={emailAddress}
                placeholder="temidayo.bayo@gmail.com"
                onChange={handleEmailAddressChange}
                required
              ></input>
            </div>
          </div>

          <div>
            <div className='label-settings'>
            <label>Middle Name</label>
              <input
                type="text"
                value={middleName}
                placeholder="Middle Name(optional)"
                onChange={handleMiddleNameChange}
              ></input>
            </div>

            <div className='label-settings'>
            <label>Date of Birth</label>
              <input
                type="text"
                value={dateOfBirth}
                placeholder="04/12/1975"
                onChange={handleDateOfBirthChange}
              ></input>
            </div>

            <div className='label-settings'>
            <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                placeholder="09055555558"
                onChange={handlePhoneNumberChange}
              ></input>
            </div>
          </div>


          <div>
            <div className='label-settings'>
            <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                placeholder="Adebayo"
                onChange={handleLastNameChange}

              />
            </div>

            <div className='label-settings'>
            <label>Marital Status</label>
              <input
                type="text"
                value={maritalStatus}
                placeholder="Married"
                onChange={handleMaritalStatusChange}

              ></input>
            </div>

            <div className='label-settings'>
            <label>NIN</label>
              <input
                type="text"
                value={nin}
                placeholder="237569103853"
                onChange={handleNinChange}

              />
            </div>
          </div>
        </div>
      </form>


      <form className='personal-information-form' onSubmit={{ handleSubmit }}>
        <div className='form-settings'>
        <div className='address-settings'>
            <label>Address</label>
              <input
                type="text"
                name="address"
                value={homeAddress}
                placeholder="Olowoporoku Close Gbagada Estate,Lagos"
                onChange={handleHomeAddressChange}

              />
        </div>
        <div className='label-settings'>
            <label>Tenancy Start Date</label>
              <input
                type="text"
                value={date}
                placeholder="02/01/2015"
                onChange={handleDateChange}

              />
            </div>
        </div>
      </form>


      <h5>Employment Information</h5>
      <form  className="personal-information-form" onSubmit={{ handleSubmit }}>
        <div className="form-settings">
          <div>
            <div className='label-settings'>
              <label>Place of Work</label>
              <input
                type="text"
                value={work}
                placeholder="Nigerian Aviation"
                onChange={handleWorkChange}

              ></input>
            </div>

            <div className='label-settings'>
              <label>Company Staff Number</label>
              <input
                type="text"
                value={number}
                placeholder="NGA7890"
                onChange={handleNumberChange}

              ></input>
            </div>
          </div>

          <div>
            <div className='label-settings'>
              <label>Job Title</label>
              <input
                type="text"
                value={jobTitle}
                placeholder="Air Hostess"
                onChange={handleJobTitleChange}

              ></input>
            </div>

            <div className='label-settings'>
            <label>Start Date</label>
            <input
                type="text"
                value={date}
                placeholder="04/05/2013"
                onChange={handleDateChange}

              />
            </div>
          </div>


          <div>
            <div className='label-settings'>
            <label> Work Email</label>
              <input
                type="text"
                value={workEmail}
                placeholder="atemiday@ngair.org.ng"
                onChange={handleWorkEmailChange}
                required

              ></input>
            </div>

            <div className='label-settings'>
            <label> End Date </label>
              <input
                type="text"
                value={endDate}
                placeholder="N/A"
                onChange={handleEndDateChange}
              />
            </div>
          </div>
        </div>
      </form>


      <form className='personal-information-form' onSubmit={{ handleSubmit }}>
      <div className='address-settings'>
              <label> Company Physical Address</label>
              <input
                type="text"
                name="address"
                value={physicalAddress}
                placeholder="SANCO Complex, MMA2 Ikeja, Lagos"
                onChange={handlePhysicalAddressChange}
                required

              ></input>
            </div>
      </form>


      <h5>Guarantor Information</h5>
      <form  className="personal-information-form" onSubmit={{ handleSubmit }}>
        <div className="form-settings">
          <div>
            <div className='label-settings'>
            <label>Full Name </label>
              <input
                type="text"
                value={fullName}
                placeholder="Solomon Adebayo"
                onChange={handleFullNameChange}

              />
            </div>

            <div className='label-settings'>
            <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                placeholder="09055555558"
                onChange={handlePhoneNumberChange}

              ></input>
            </div>

            <div className='label-settings'>
            <label>Place of Work </label>
              <input
                type="text"
                value={placeofwork}
                placeholder="Greene Logistics"
                onChange={handlePlaceOfWorkChange}

              ></input>
            </div>
          </div>


          <div>
            <div className='label-settings'>
            <label>Employment Status </label>
              <input
                type="text"
                value={employmentStatus}
                placeholder="Employed"
                onChange={handleEmploymentStatusChange}
                className='information-input'
              ></input>
            </div>

            <div className='label-settings'>
            <label>Date of Birth</label>
              <input
                type="text"
                value={birthDate}
                placeholder="12/04/2000"
                onChange={handleBirthDateChange}

              ></input>
            </div>

            <div className='label-settings'>
            <label>Work Address</label>
              <input
                type="text"
                name="address"
                value={address}
                placeholder="12, Herbert Marculay Way, Ikoyi, Lagos"
                onChange={handleAddressChange}
                required

              ></input>
            </div>
          </div>

          <div>
            <div className='label-settings'>
            <label>Email Address</label>
              <input
                type="text"
                value={email}
                placeholder="temidayo.bayo@gmail.com"
                onChange={handleEmailChange}
                required

              ></input>
            </div>

            <div className='label-settings'>
            <label>NIN</label>
              <input
                type="text"
                value={nin}
                placeholder="237569103853"
                onChange={handleNinChange}

              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;
