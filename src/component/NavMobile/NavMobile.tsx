import React, { useState } from 'react';
import './navmobile.css';
import Link from 'next/link';
import { navs } from '@/data/data';

type Props = {
  onClose: () => void;
  open: boolean;
};

const NavMobile: React.FC<Props> = ({ onClose, open }) => {
  const [dropmenu, setDropmenu] = useState(false);

  const handleDropMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setDropmenu((prev) => !prev);
  };

  return (
    <div className={`navmob ${open ? 'open' : ''}`} onClick={onClose}>
      <div
        className={`inner-menu ${open ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-header">
          <Link
            href="/"
            className="menu-logo d-flex align-items-center"
            onClick={onClose}
          >
            <h1>ProAppliance</h1>
            <i className="bi bi-x"></i>
          </Link>
        </div>
        <div className="menu">
          <ul>
            {navs.map((nav) => (
              <li key={nav.id} className="menu-item">
                {nav.children ? (
                  <div className="menu-dropdown">
                    <Link
                      href={nav.link}
                      className="menu-dropbtn menu-link"
                      onClick={onClose}
                    >
                      {nav.name}
                      <i
                        className="bi bi-chevron-down"
                        onClick={handleDropMenu}
                      ></i>
                    </Link>
                    <ul
                      className={`menu-dropdown-content ${
                        dropmenu ? 'show-menu' : ''
                      }`}
                    >
                      {nav.children.map((child) => (
                        <li key={child.id}>
                          <Link href={child.link} onClick={onClose}>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={nav.link} className="menu-link" onClick={onClose}>
                    {nav.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
