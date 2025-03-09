import React from 'react';
import './navmobile.css';

type Props = {
  onClose: () => void;
  open: boolean;
};

const NavMobile: React.FC<Props> = ({ onClose, open }) => {
  return (
    <div className={`navmob ${open ? 'open' : ''}`} onClick={onClose}>
      <div className={`inner-menu ${open ? 'open' : ''}`}>NavMobile</div>
    </div>
  );
};

export default NavMobile;
