import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import './security.css';

export const Toggle = () => {
  return (
    <div>
      <label className="toggle-wrap">
        <input type="checkbox" className="toggle-switch" />
        <span className="toggle">
          <PowerSettingsNewIcon className="toggle-icons power" />
          <RadioButtonUncheckedIcon className="toggle-icons circle" />
        </span>
        <span className="background"></span>
      </label>
    </div>
  );
};
