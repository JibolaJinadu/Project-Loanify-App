import React, { useEffect, useState } from 'react';
import './Overview.css';
import './Overview-resp.css';
import Chart from './PieChart';
import Line_Chart from './LineChart';
import Barchart1 from './BarChart1';
import Barchart2 from './BarChart2';
import Barchart3 from './BarChart3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext';

const OverviewPage = () => {
  const [loading, setLoading] = useState(true);
  const { loginToken } = React.useContext(AuthContext);
  const [allLoans, setAllLoans] = useState();
  const [loansApproved, setLoansApproved] = useState();
  const [loansPending, setLoansPending] = useState();
  const [loansDue, setLoansDue] = useState();
  const [loansClosed, setLoansClosed] = useState();
  const [loansExtended, setLoansExtended] = useState();
  const [loansDefaulted, setLoansDefaulted] = useState();
  const [percentages, setPercentages] = useState([15, 50, 20, 15]);
  useEffect(() => {
    const fetchData = async () => {
      if (loginToken) {
        try {
          const requests = [
            axios.get(
              `https://loanifyteama-production.up.railway.app/api/v1/loans/stats`,
              {
                headers: {
                  Authorization: `Bearer ${loginToken}`,
                },
              }
            ),
          ];

          const responses = await Promise.all(requests);
          setAllLoans(responses[0].data.data[0].amount);
          setLoansPending(responses[0].data.data[1].amount);
          setLoansApproved(responses[0].data.data[2].amount);
          setLoansDue(responses[0].data.data[3].amount);
          setLoansExtended(responses[0].data.data[4].amount);
          setLoansDefaulted(responses[0].data.data[5].amount);
          setLoansClosed(responses[0].data.data[6].amount);
          console.log(responses[0].data.data[0].amount);
          setPercentages([increasePercentage, 50, 20, 15]);
          setLoading(false);
        } catch (error) {
          console.log(error);
          // toast.error("Couldn't fetch wallet details");
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [loginToken]);

  return (
    <>
      <div className="overview-container">
        <div className="overview-1">
          <div className="overview-row1">
            <div className="row-item1">
              <div className="item-left">
                <p className="upper-text">All Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop1"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent">15%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right1">{allLoans}</h2>
            </div>

            <div className="row-item2">
              <div className="item-left">
                <p className="upper-text">New Applications</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop2"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent"> 0%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right2">0</h2>
            </div>

            <div className="row-item3">
              <div className="item-left">
                <p className="upper-text">Pending Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop3"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent">5%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right3">{loansPending}</h2>
            </div>
            <div className="row-item4">
              <div className="item-left">
                <p className="upper-text">Active Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop4"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent">12%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right4">{loansApproved}</h2>
            </div>
          </div>

          <div className="overview-row1 pb-50">
            <div className="row-item5">
              <div className="item-left">
                <p className="upper-text">Due Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop5"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent">12%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right5">{loansDue}</h2>
            </div>
            <div className="row-item6">
              <div className="item-left">
                <p className="upper-text">Extended Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop6"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent">8%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right6">{loansExtended}</h2>
            </div>
            <div className="row-item7">
              <div className="item-left">
                <p className="upper-text">Defaulted Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-down drop7"
                    icon={faChevronDown}
                  />
                  <span className="lower-text-percent">10%</span>
                  <span className="increase">Decrease</span>
                </p>
              </div>
              <h2 className="item-right right7">{loansDefaulted}</h2>
            </div>
            <div className="row-item8">
              <div className="item-left">
                <p className="upper-text">Closed Loans</p>
                <p className="lower-text">
                  <FontAwesomeIcon
                    className="drop-up drop8"
                    icon={faChevronUp}
                  />
                  <span className="lower-text-percent">12%</span>
                  <span className="increase">Increase</span>
                </p>
              </div>
              <h2 className="item-right right8">{loansClosed}</h2>
            </div>
          </div>
        </div>

        <div className="overview-2">
          <div className="pie-header"> Loan Application Chart</div>
          <div className="pie-label-container">
            <div>
              <Chart
                approve={loansApproved}
                close={loansClosed}
                defaulted={loansDefaulted}
                pending={loansPending}
                percentages={percentages}
              />
            </div>
            
            <div>
              <div className='label-both-container'>
                <div className="label-tabs label-bkg">Pending Loans</div>
                <div>{loansPending}%</div>
              </div>
              <div className='label-both-container'>
                <div className="label-tabs2 label-bkg">Approved Loans</div>
                <div>{loansApproved}%</div>
              </div>
              <div className='label-both-container'>
                <div className="label-tabs3 label-bkg">Defaulted Loans</div>
                <div>{loansDefaulted}%</div>
              </div>
              <div className='label-both-container'>
                <div className="label-tabs4 label-bkg">Closed Loans</div>
                <div>{loansClosed}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-3">
          <Line_Chart />
          <Barchart1 />
        </div>
        <div className="overview-3">
          <Barchart2 />
          <Barchart3 />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
