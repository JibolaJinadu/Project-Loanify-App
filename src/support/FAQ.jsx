import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SettingsTabs from '../settings/SettingsTabs';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Support.css';


const FAQ = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, margin: "0 20px" }}>
          <Toolbar />
          <div role="presentation">
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<ChevronRightIcon />}
              sx={{
                backgroundColor: "#F0F4FC",
                width: "94%",
                margin: "0 20px 10px",
                padding: "10px 5px",
              }}
            >
              <Link className="breadcrumbs" to="/dashboard">
                Home
              </Link>
              <Link className="breadcrumbs" to="/support">
                Support
              </Link>
              <p className="breadcrumbs">FAQ</p>
            </Breadcrumbs>
          </div>

          <div className="overall">
            <h3 className="faq-header">FAQs</h3>

            <div className="faq-wrapper">
              <select className="select-wrapper">
                <option className="selected-option" hidden selected>How can I track the status of a loan application?</option>
                <option disabled>To track the status of a loan application, access the New </option>
                <option disabled>Applications name or page and choose or search for the  </option>
                <option disabled> applicant's name or loan ID. The app will display the app- </option>
                <option disabled> lication such as "Pending",  "Docs.  Reviewed," current  </option>
                <option disabled>stage of the and "Incomplete docs."</option>
              </select>
            </div>

            <div className="faq-wrapper">
              <select className="select-wrapper">
                <option className="selected-option" hidden selected>What documents are typically required for loan processing?</option>
                <option disabled>The documents required for loan processing vary depending</option>
                <option disabled> on the loan type, However, common documents include </option>
                <option disabled>indentification proof, income statements, bank statements,</option>
                <option disabled> employment verification andcollateral documentation </option>
                <option disabled>(when Applicable). You can access these files in the </option>
                <option disabled>Documents sub page under client's information overview.</option>
              </select>
            </div>

            <div className="faq-wrapper">
              <select className="select-wrapper">
                <option className="selected-option" hidden selected>What happens if a borrower misses a loan repayment?</option>
                <option disabled>If a Borrower misses a loan repayment, It is essential to </option>
                <option disabled>follow established colection procedures, Loan Officers  </option>
                <option disabled>should access the due loans page to view overdue loans,</option>
                <option disabled> send reminders via messages or emailing their clients and   </option>
                <option disabled>initiate appropriate actions based on the institution's policies. </option>
                <option disabled>It is crucial to maintain clear communication with browsers to </option>
                <option disabled> resolve any payment issues promptly.</option>
              </select>
            </div>

            <div className="faq-wrapper">
              <select className="select-wrapper">
                <option className="selected-option" hidden selected>What should i do if i encounter a technical issue on the app?</option>
                <option disabled>You can reach out to the app's support team for assistance</option>
                <option disabled>by calling the toll free phone number on the support page or</option>
                <option disabled>typing and send a report from the support page. Describe the</option>
                <option disabled>issue you are facing, providing any relevant details needed and</option>
                <option disabled>the support team will guide you through the resolution process.</option>
              </select>
            </div>

          </div>
        </Box>
      </Box>
    </div>
  );
};

export default FAQ;