import { Toggle } from '../security/Toggle';
import './notification.css';

function Notification() {
  const logState = (state) => {
    console.log('Toggled:', state);
  };

  return (
    <div className="Notification-card">
      <div className="email-container">
        <div className="Text_holder">
          <h2>Email Notifications</h2>
          <p>
            Get emails to find out what happens when you are not online.You can
            turn them off
          </p>
        </div>
        <div className="email-section">
          <section className="email-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>New applications </h4>
              <p>Get notified about new applications </p>
            </div>
          </section>
          <section className="email-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>Extension applications </h4>
              <p>Get notified about new loan extension application</p>
            </div>
          </section>
          <section className="email-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>Due Loans</h4>
              <p>Get notified about due loans</p>
            </div>
          </section>
          <section className="email-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>Completed loans</h4>
              <p>Get notified about completed loans</p>
            </div>
          </section>
          <section className="email-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>New messages</h4>
              <p>Get notified about new messages</p>
            </div>
          </section>
        </div>
      </div>
      <div className="Loan-container">
        <div className="Text_holder">
          <h2>Loan Applications</h2>
          <p>
            Get push notifications in-app to find out what appens wen you're
            online. You can turn them off.
          </p>
        </div>
        <div className="loan-section">
          <section className="loan-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>New applications</h4>
              <p>Get notified about new applications</p>
            </div>
          </section>
          <section className="loan-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>Extension applications </h4>
              <p>Get notified about new loan extension application</p>
            </div>
          </section>
          <section className="loan-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>Due Loans</h4>
              <p>Get notified about due loans</p>
            </div>
          </section>
          <section className="loan-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>Completed loans</h4>
              <p>Get notified about completed loans</p>
            </div>
          </section>
          <section className="loan-options">
            <div className="btn-holder">
              <Toggle label="Toggle me" toggled={true} onClick={logState} />
            </div>
            <div className="text-holder">
              <h4>New messages</h4>
              <p>Get notified about new messages</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Notification;
