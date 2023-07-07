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
            <div className="section-2">
              <select className="section-2-select">
                <option className="selected-option" hidden selected>
                  How can I track the status of a loan application?
                </option>
                <option></option>
                <option>
                  To track the status of a loan application, access the New
                  Applications name or page and choose or search for the
                  applicant's name or loan ID.
                </option>
                <option>
                  The app will display the current stage of the application such
                  as "Pending", "Docs. Reviewed," and "Incomplete docs."
                </option>
                <option></option>
              </select>
            </div>

            <div className="section-2">
              <select className="section-2-select">
                <option className="selected-option" hidden selected>
                  What documents are typically required for loan processing?
                </option>
                <option></option>
                <option>
                  The documents required for loan processing vary depending on
                  the loan type, However, common documents include
                  indentification proof,
                </option>
                <option>
                  income statements, bank statements, employment verification
                  and collateral documentation (when Applicable). You can access
                  these files
                </option>
                <option>
                  in the Documents sub page under client's information overview.
                </option>
                <option></option>
              </select>
            </div>

            <div className="section-2">
              <select className="section-2-select">
                <option className="selected-option" hidden selected>
                  What happens if a borrower misses a loan repayment?
                </option>
                <option></option>
                <option>
                  If a borrower misses a loan repayment, It is essential to
                  follow established colection procedures, Loan Officers should
                  access the due loans page
                </option>
                <option>
                  to view overdue loans, send reminders via messages or emailing
                  their clients and initiate appropriate actions based on the
                  institution's policies.
                </option>
                <option>
                  It is crucial to maintain clear communication with browsers to
                  resolve any payment issues promptly.
                </option>
                <option></option>
              </select>
            </div>

            <div className="section-2">
              <select className="section-2-select">
                <option className="selected-option" hidden selected>
                  What should i do if i encounter a technical issue on the app?
                </option>
                <option></option>
                <option>
                  You can reach out to the app's support team for assistance by
                  calling the toll free phone number on the support page or
                  typing
                </option>
                <option>
                  and send a report from the support page. Describe the issue
                  you are facing, providing any relevant details needed and the
                </option>
                <option>
                  support team will guide you through the resolution process.
                </option>
                <option></option>
              </select>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default FAQ;