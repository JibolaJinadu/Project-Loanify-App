import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CircleProgress from './CircleProgress';

export default function ProfilePercentage() {
  return (
    <section className="profilePercentageWrapper">
      <div className="box box1" style={{ borderBottom: '4px solid blue' }}>
        <div className='newClients'>
          <p>New clients</p>
          <div>
            <FontAwesomeIcon icon={faAngleUp} className="angleUp" />
            <span>110%</span>
          </div>
        </div>
        <div>
          <CircleProgress percent={45} strokeColor="blue" />
        </div>
      </div>
      <div className="box box2" style={{ borderBottom: '4px solid green'}}>
        <div className='activeLoans'>
          <p>Active Loans</p>
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="angleDown" />
            <span>50%</span>
          </div>
        </div>
        <div>
        <CircleProgress percent={60} strokeColor="green" />
        </div>
      </div>
      <div className="box box3" style={{ borderBottom: '4px solid orange'}}>
        <div className='extendedLoans'>
          <p>Extended Loans</p>
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="angleDown" />
            <span>30%</span>
          </div>
        </div>
        <div>
        <CircleProgress percent={30} strokeColor="orange" />
        </div>
      </div>
      <div className="box box4" style={{ borderBottom: '4px solid red'}}>
        <div className='overdueLoans'>
          <p>Overdue Payments</p>
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="angleDown" />
            <span>30%</span>
          </div>
        </div>
        <div>
        <CircleProgress percent={30} strokeColor="red" />
        </div>
      </div>
      <div className="box box4" style={{ borderBottom: '4px solid red'}}>
        <div className='overdueLoans'>
          <p>Defaulted Loans</p>
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="angleDown" />
            <span>30%</span>
          </div>
        </div>
        <div>
        <CircleProgress percent={30} strokeColor="red" />
        </div>
      </div>
    </section>
  );
}


