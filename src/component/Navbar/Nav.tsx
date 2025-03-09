import React from 'react';
import Link from 'next/link';
import { navs } from '@/data/data';
import './nav.css';

function Nav() {
  return (
    <nav id={'navbar'} className={'navbar'}>
      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
