import { Toggle } from '../security/Toggle';
import Button from './Button';
import Language from './Language';
import NavbarItem from './NavbarItem';
import './general.css';

export default function General() {
  const tab = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    marginBottom: '15px',
    height: '65px',
    backgroundColor: '#F0F4FC',
    textTransform: 'capitalize',
    fontWeight: '600',
  };
  const tabs = {
    display: 'flex',
    padding: '10px 20px',
    flexDirection: 'column',
    marginBottom: '15px',
    alignItems: 'flex-start',
    backgroundColor: '#F0F4FC',
    textTransform: 'capitalize',
    fontWeight: '600',
  };

  return (
    <div>
      {/* <div style={tab}>
        <NavbarItem title={'date & time'} />
        <a href="#" className="s-btn btn--blue btn--right">
          Edit
        </a>
      </div> */}

      {/* <div style={tab}>
        <NavbarItem title={'dark mode'} />
        <Toggle />
      </div> */}

      <div style={tab}>
        <NavbarItem title={'updates'} />
      </div>

      {/* <div style={tabs}>
        <NavbarItem title={'language'} />
        <Language placeholder="language" />
      </div> */}

      <div style={tab}>
        <NavbarItem title={'legal and registory'} />
      </div>

      {/* <div style={tab}>
        <NavbarItem title={'sign out'} />
        <Button link={'/login'} move={'signout'} />
      </div> */}
    </div>
  );
}
