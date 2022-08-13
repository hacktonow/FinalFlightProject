import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

import { DialogActions } from '@material-ui/core';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

   // this section for dropdown
   const [dropdown, setDropdown]= useState(false);
   const onMouseEnter = () => {
    if (window.innerWidth <= 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth <= 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
   //this section for second form
//    const[open, setopen] = React.useState(false);
   
//  const handleOpen=()=>{

// setopen(true);

//   }
//   const handleClose=()=>{

//     setopen(true);
    
//       }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           The Bliss Flight
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/flights'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Cheap Flights
              </Link>
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <Link
                to='/Holidays'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Holidays <i className='fa fa-caret-down'/>
              </Link>
              
              {/* {dropdown && <Dropdown/>} */}
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

           
          </ul>
          <DialogActions>
        
        </DialogActions>
        </div>
       
      </nav>
    
     
      {/* <UserForm open={open} onClose={handleClose} /> */}
    
     
     
    
    </>
  );
}

export default Navbar;
