import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuItems } from './MenuItems';
import sitelogo from '../assets/vr2tech-logo.png';
import partnerlogo from '../assets/google-partner.png';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current && window.scrollY > navRef.current.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add event listener to close mobile menu when clicked outside
    const handleOutsideClick = (e) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`container ${isSticky ? 'sticky' : ''}`} ref={navRef}>
      <nav className='nav-items'>
      <div className="logo-m">
        <Link to='/'>
          <img src={sitelogo} className='navr-logo' alt='vr2tec-logo'/>
        </Link>
        <Link to='https://www.google.com/partners/agency?id=6336786530'>
          <img src={partnerlogo} className='navr-logo1' alt='google-partner-logo' />
        </Link>
        </div>
        <FaBars className='menu-icon' onClick={toggleMobileMenu} />
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                onClick={handleMenuItemClick} // Add onClick handler
              >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
