import React from 'react';
import Link from 'next/link';
import { navs } from '@/data/data';
import './nav.css';
import { usePathname } from 'next/navigation';

function Nav() {
  const pathName = usePathname();

  return (
    <nav id={'navbar'} className={'navbar'}>
      <ul>
        {navs.map((nav) => (
          <li key={nav.id} className="nav-item">
            {nav.children ? (
              <div className="dropdown">
                <Link
                  href={nav.link}
                  className={`dropbtn navlink ${
                    pathName == nav.link ? 'active' : ''
                  }`}
                >
                  {nav.name}
                  <i className="bi bi-chevron-down"></i>
                </Link>
                <ul className="dropdown-content">
                  {nav.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={child.link}
                        onClick={() => (window.location.href = child.link)}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={nav.link}
                className={`navlink ${pathName == nav.link ? 'active' : ''}`}
              >
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
