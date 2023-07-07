import { useState } from 'react';
import './security.css';

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="toggle">
      <label>
        <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
        <span className={isToggled ? 'toggle-slider grey' : 'toggle-slider'} />
        {/* <strong>{label}</strong> */}
      </label>
    </div>
  );
};
