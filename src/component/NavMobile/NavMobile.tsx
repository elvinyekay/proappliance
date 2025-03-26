import React, { useState } from 'react';
import './navmobile.css';
import Link from 'next/link';
import { navs } from '@/data/data';
import Facebook from '../Svg/Facebook';

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
    <div
      className={`navmob ${open ? 'open' : ''}`}
      onClick={() => {
        onClose();
        setDropmenu(false);
      }}
    >
      <div
        className={`inner-menu ${open ? 'open' : ''} ${
          dropmenu ? 'scroll' : ''
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-content">
          <div className="menu-header">
            <Link
              href="/"
              className="menu-logo d-flex align-items-center"
              onClick={() => {
                onClose();
                setDropmenu(false);
              }}
            >
              <div className="logo-text">
                <h1>Pro Appliance</h1>
              </div>
              <svg
                className="close-icon"
                viewBox="0 0 30 30"
                width="20px"
                height="20px"
                fill="white"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
              </svg>
            </Link>
          </div>
          <div className="menu">
            <ul>
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className={`menu-item ${
                    nav.children && dropmenu ? 'drop' : ''
                  }`}
                >
                  {nav.children ? (
                    <div className="menu-dropdown">
                      <Link
                        href={nav.link}
                        className="menu-dropbtn menu-link"
                        onClick={onClose}
                      >
                        {nav.name}
                        <i
                          // className="bi bi-chevron-down"
                          className={`icon-down ${dropmenu ? 'rotate' : ''}`}
                          onClick={handleDropMenu}
                        >
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 10L12 15L17 10"
                              stroke="#fff"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                      </Link>
                      <ul
                        className={`menu-dropdown-content ${
                          dropmenu ? 'show-menu' : ''
                        }`}
                      >
                        {nav.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              className="menu-link"
                              href={child.link}
                              onClick={onClose}
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
                      className="menu-link"
                      onClick={onClose}
                    >
                      {nav.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="contacts">
              <a
                className="contacts-icon"
                href="mailto:proapplianceexpress@gmail.com"
              >
                <i className="bi bi-envelope-fill"></i>
                <span>proapplianceexpress@gmail.com</span>
              </a>
              <a className="contacts-icon" href="tel:+19453335363">
                <i className="bi bi-telephone-fill"></i>
                <span>+ 1945 333 5363</span>
              </a>
            </div>
            <div className="social-icons">
              <a href="#">
                <Facebook width="20px" height="20px" />
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#fff">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.065 7.24201C13.0559 8.01293 12.4407 8.63119 11.6891 8.62497C10.9374 8.61874 10.3321 7.99038 10.3351 7.21941C10.3381 6.44845 10.9483 5.82507 11.7 5.82501C12.0642 5.82713 12.4128 5.97764 12.6688 6.24341C12.9248 6.50918 13.0673 6.86841 13.065 7.24201V7.24201Z"
                    // stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.23033 11.534C9.64454 11.534 9.98033 11.1982 9.98033 10.784C9.98033 10.3698 9.64454 10.034 9.23033 10.034V11.534ZM5.85 10.784V10.034C5.46633 10.034 5.14453 10.3235 5.10416 10.7051L5.85 10.784ZM4.61666 15.3131C4.57308 15.725 4.87168 16.0942 5.28359 16.1378C5.69551 16.1814 6.06476 15.8828 6.10834 15.4709L4.61666 15.3131ZM8.74177 11.361C9.05605 11.6309 9.52955 11.5948 9.79937 11.2805C10.0692 10.9663 10.0332 10.4928 9.71888 10.2229L8.74177 11.361ZM9.05677 10.643L8.55955 11.2046L8.56822 11.212L9.05677 10.643ZM9.05677 4.13298L8.57327 3.55964C8.56867 3.56352 8.56412 3.56746 8.55961 3.57144L9.05677 4.13298ZM14.3423 4.13298L14.8394 3.57144C14.8326 3.56542 14.8257 3.55951 14.8187 3.55373L14.3423 4.13298ZM14.3423 10.643L14.8309 11.2121L14.8394 11.2045L14.3423 10.643ZM13.6801 10.2229C13.3659 10.4928 13.3298 10.9663 13.5997 11.2805C13.8695 11.5948 14.343 11.6309 14.6573 11.361L13.6801 10.2229ZM9.71615 10.2214C9.40105 9.95258 8.92766 9.99008 8.6588 10.3052C8.38995 10.6203 8.42744 11.0937 8.74255 11.3625L9.71615 10.2214ZM9.97787 12.4165C10.293 12.6854 10.7664 12.6479 11.0352 12.3328C11.3041 12.0177 11.2666 11.5443 10.9515 11.2754L9.97787 12.4165ZM14.1697 10.033C13.7555 10.033 13.4197 10.3688 13.4197 10.783C13.4197 11.1972 13.7555 11.533 14.1697 11.533V10.033ZM17.55 10.783L18.2958 10.7039C18.2554 10.3225 17.9336 10.033 17.55 10.033V10.783ZM17.2917 15.462C17.3353 15.8739 17.7046 16.1725 18.1165 16.1288C18.5284 16.0852 18.827 15.7159 18.7833 15.3039L17.2917 15.462ZM14.659 11.3514C14.9729 11.0812 15.0083 10.6076 14.7381 10.2937C14.4678 9.97976 13.9943 9.94435 13.6804 10.2146L14.659 11.3514ZM11.7 12.909L11.2108 13.4775C11.4921 13.7195 11.9081 13.7195 12.1893 13.4774L11.7 12.909ZM10.9539 11.2775C10.6399 11.0073 10.1664 11.0428 9.89618 11.3568C9.626 11.6708 9.66151 12.1443 9.97548 12.4145L10.9539 11.2775ZM6.10832 15.471C6.15198 15.0591 5.85345 14.6898 5.44154 14.6462C5.02963 14.6025 4.66033 14.901 4.61668 15.3129L6.10832 15.471ZM4.875 19.992L4.12918 19.9129C4.10676 20.1244 4.17519 20.3355 4.31742 20.4936C4.45966 20.6517 4.66233 20.742 4.875 20.742V19.992ZM10.725 20.742C11.1392 20.742 11.475 20.4062 11.475 19.992C11.475 19.5778 11.1392 19.242 10.725 19.242V20.742ZM4.93485 14.7759C4.59457 15.012 4.51019 15.4794 4.74637 15.8196C4.98255 16.1599 5.44987 16.2443 5.79015 16.0081L4.93485 14.7759ZM8.34172 14.2371C8.682 14.0009 8.76639 13.5336 8.53021 13.1933C8.29403 12.8531 7.82671 12.7687 7.48643 13.0049L8.34172 14.2371ZM10.8924 12.462C11.2327 12.2258 11.317 11.7585 11.0807 11.4182C10.8445 11.078 10.3772 10.9937 10.0369 11.2299L10.8924 12.462ZM7.48632 13.0009C7.14608 13.2372 7.06178 13.7045 7.29802 14.0447C7.53426 14.385 8.00159 14.4693 8.34183 14.233L7.48632 13.0009ZM8.60033 13.3144C8.43321 12.9354 7.99049 12.7636 7.61149 12.9307C7.23248 13.0978 7.06071 13.5406 7.22782 13.9196L8.60033 13.3144ZM10.0387 20.2946C10.2059 20.6736 10.6486 20.8454 11.0276 20.6782C11.4066 20.5111 11.5784 20.0684 11.4113 19.6894L10.0387 20.2946ZM10.725 19.242C10.3108 19.242 9.975 19.5778 9.975 19.992C9.975 20.4062 10.3108 20.742 10.725 20.742V19.242ZM13.65 20.742C14.0642 20.742 14.4 20.4062 14.4 19.992C14.4 19.5778 14.0642 19.242 13.65 19.242V20.742ZM13.65 19.242C13.2358 19.242 12.9 19.5778 12.9 19.992C12.9 20.4062 13.2358 20.742 13.65 20.742V19.242ZM18.525 19.992V20.742C18.7377 20.742 18.9403 20.6517 19.0826 20.4936C19.2248 20.3355 19.2932 20.1244 19.2708 19.9129L18.525 19.992ZM18.7833 15.3129C18.7397 14.901 18.3704 14.6025 17.9585 14.6462C17.5466 14.6898 17.248 15.0591 17.2917 15.471L18.7833 15.3129ZM13.1073 19.4743C12.8214 19.7741 12.8326 20.2488 13.1324 20.5347C13.4321 20.8206 13.9068 20.8094 14.1927 20.5096L13.1073 19.4743ZM18.5802 15.9096C18.8661 15.6099 18.8549 15.1352 18.5551 14.8493C18.2554 14.5634 17.7807 14.5746 17.4948 14.8743L18.5802 15.9096ZM9.23033 10.034H5.85V11.534H9.23033V10.034ZM5.10416 10.7051L4.61666 15.3131L6.10834 15.4709L6.59584 10.8629L5.10416 10.7051ZM9.71888 10.2229L9.54533 10.0739L8.56822 11.212L8.74177 11.361L9.71888 10.2229ZM9.55394 10.0814C8.79478 9.40932 8.35383 8.42682 8.35383 7.38798H6.85383C6.85383 8.8492 7.4736 10.243 8.55961 11.2045L9.55394 10.0814ZM8.35383 7.38798C8.35383 6.34915 8.79478 5.36665 9.55394 4.69452L8.55961 3.57144C7.4736 4.53296 6.85383 5.92677 6.85383 7.38798H8.35383ZM9.54028 4.70633C10.4285 3.95731 11.1618 3.72366 11.7912 3.75233C12.4363 3.78173 13.1124 4.09259 13.8658 4.71223L14.8187 3.55373C13.9331 2.82538 12.9537 2.30374 11.8594 2.25389C10.7494 2.20331 9.65945 2.64366 8.57327 3.55964L9.54028 4.70633ZM13.8451 4.69452C14.6042 5.36665 15.0452 6.34915 15.0452 7.38798H16.5452C16.5452 5.92677 15.9254 4.53296 14.8394 3.57144L13.8451 4.69452ZM15.0452 7.38798C15.0452 8.42682 14.6042 9.40932 13.8451 10.0814L14.8394 11.2045C15.9254 10.243 16.5452 8.8492 16.5452 7.38798H15.0452ZM13.8537 10.0739L13.6801 10.2229L14.6573 11.361L14.8308 11.212L13.8537 10.0739ZM8.74255 11.3625L9.97787 12.4165L10.9515 11.2754L9.71615 10.2214L8.74255 11.3625ZM14.1697 11.533H17.55V10.033H14.1697V11.533ZM16.8042 10.862L17.2917 15.462L18.7833 15.3039L18.2958 10.7039L16.8042 10.862ZM13.6804 10.2146L11.2107 12.3406L12.1893 13.4774L14.659 11.3514L13.6804 10.2146ZM12.1892 12.3405L10.9539 11.2775L9.97548 12.4145L11.2108 13.4775L12.1892 12.3405ZM4.61668 15.3129L4.12918 19.9129L5.62082 20.071L6.10832 15.471L4.61668 15.3129ZM4.875 20.742H10.725V19.242H4.875V20.742ZM5.79015 16.0081L8.34172 14.2371L7.48643 13.0049L4.93485 14.7759L5.79015 16.0081ZM10.0369 11.2299L7.48632 13.0009L8.34183 14.233L10.8924 12.462L10.0369 11.2299ZM7.22782 13.9196L10.0387 20.2946L11.4113 19.6894L8.60033 13.3144L7.22782 13.9196ZM10.725 20.742H13.65V19.242H10.725V20.742ZM13.65 20.742H18.525V19.242H13.65V20.742ZM19.2708 19.9129L18.7833 15.3129L17.2917 15.471L17.7792 20.071L19.2708 19.9129ZM14.1927 20.5096L18.5802 15.9096L17.4948 14.8743L13.1073 19.4743L14.1927 20.5096Z"
                    // fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
