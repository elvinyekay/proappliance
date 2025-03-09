import React from 'react';
import Link from 'next/link';
import { navs } from '@/data/data';
import './nav.css';

function Nav() {
  return (
    <nav id={'navbar'} className={'navbar'}>
      <ul>
        {navs.map((nav) => (
          <li key={nav.id} className="nav-item">
            {nav.children ? (
              <div className="dropdown">
                <Link href={nav.link} className="dropbtn navlink">
                  {nav.name}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul className="dropdown-content">
                  {nav.children.map((child) => (
                    <li key={child.id}>
                      <Link href={child.link}>{child.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link href={nav.link} className="navlink">
                {nav.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
