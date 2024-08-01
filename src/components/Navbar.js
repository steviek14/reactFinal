// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

function Navbar() {
  // State for managing click status of the menu icon
  const [click, setClick] = useState(false);
  // State for managing the visibility of the button
  const [button, setButton] = useState(true);

  // Toggle the click state when menu icon is clicked
  const handleClick = () => setClick(!click);
  // Close the mobile menu
  const closeMobileMenu = () => setClick(false);

  // Function to show or hide the button based on window width
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // useEffect hook to run showButton once when the component mounts
  useEffect(() => {
    showButton();
  }, []);

  // Add event listener to handle window resize
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* Navbar logo, navigates to home and closes mobile menu when clicked */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            NOMADIC
            <i className='fab fa-typo3' />
          </Link>
          {/* Menu icon for mobile view, toggles menu open/close state */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* Navigation menu, changes class based on click state */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {/* Render Button component if button state is true */}
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}


export default Navbar;
