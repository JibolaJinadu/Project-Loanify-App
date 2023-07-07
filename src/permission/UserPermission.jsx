import React from 'react';
import './UserPermission.css';

const UserPermission = () => {
  return (
    <div className="user-info">
      <table id="users">
        <thead>
          <tr>
            <th>
              <input type="checkBox"></input>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tr className="padtap">&nbsp;</tr>
        <tbody>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Loan Officer</td>
            <td>Approver</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Manager</td>
            <td>Reviewer</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Supervisor</td>
            <td>Reviewer</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Field Officer</td>
            <td>Uploader</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Loan Officer</td>
            <td>Approver</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Manager</td>
            <td>Reviewer</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Supervisor</td>
            <td>Reviewer</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Field Officer</td>
            <td>Uploader</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
          <tr className="rowWrapper">
            <td>
              <input type="checkBox"></input>
            </td>
            <td>Temidayo</td>
            <td>Adebayo</td>
            <td>atemidayo@xyz.com</td>
            <td>Loan Officer</td>
            <td>Approver</td>
            <td>
              <select className="permit" id="permit">
                <option value="choose" hidden>
                  choose
                </option>
                <option value="Approver">Approver</option>
                <option value="Reviewer">Reviewer</option>
                <option value="Uploader">Uploader</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserPermission;
