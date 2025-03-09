'use client';

import React, { useEffect, useState } from 'react';
import './header.css';
import Nav from '@/component/Navbar/Nav';
import Call from '@/component/Call/Call';
import Link from 'next/link';
import NavMobile from '../NavMobile/NavMobile';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id={'header'}
      className={`header d-flex align-items-center fixed-top ${
        isScrolled ? 'scrolled' : ''
      }`}
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
