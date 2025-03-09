'use client';

import React, { useState } from 'react';
import './header.css';
import Nav from '@/component/Navbar/Nav';
import Call from '@/component/Call/Call';
import Link from 'next/link';
import NavMobile from '../NavMobile/NavMobile';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    console.log('toggle');
    setOpenMenu(!openMenu);
  };

  return (
    <header
      id={'header'}
      className={'header d-flex align-items-center fixed-top'}
    >
      <div className="container-fluid  d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <h1>ProAppliance</h1>
        </Link>
        <Nav />
        <div className="position-relative">
          <Call />
        </div>
        <div className="mobile-menu">
          <a className="mobile-menu-button" href="#" onClick={toggleMenu}>
            <span className="icon-dots-menu-1"></span>
            <span className="icon-dots-menu-2"></span>
          </a>
        </div>
        <NavMobile onClose={() => setOpenMenu(false)} open={openMenu} />
      </div>
    </header>
  );
};

export default Header;
