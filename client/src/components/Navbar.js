import React, {useState} from 'react';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { IoIosCompass } from "react-icons/io";
import {BsFillBrightnessHighFill} from "react-icons/bs";
import  {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';



export default function Navbar() {
const [click, setClick] = useState(false);
const [button, setButton] =useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }
};


  window.addEventListener('resize', showButton);
 


  return (
    <>
      <IconContext.Provider value={{ color: 'yellow' }}>  
        <nav className='navbar'>
          <div class= "navbar-container container">
            <Link to="/" class = "navbar-logo" onClick ={closeMobileMenu}>
              <BsFillBrightnessHighFill class = 'navbar-icon' />
              {/* <IoIosCompass class = 'navbar-icon' /> */}
              Camino de Santiago
            </Link>
            <div class = "menu-icon" onClick = {handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul class = {click ? 'nav-menu active' : 'nav-menu'}>
              {/* <li class = 'nav-item'>
                <Link to="/" class = 'nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              </li>  */}
              <li class = 'nav-item'>
                <Link to="/login" class = 'nav-links' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
              <li class = 'nav-item'>
                <Link to="/logout" class = 'nav-links' onClick={closeMobileMenu}>
                  LogOut
                </Link>
              </li>
              <li class = 'nav-item'>
                <Link to="/UserPage" class = 'nav-links' onClick={closeMobileMenu}>
                  UserPage
                </Link>
              </li>
              <li class = 'nav-item'>
                <Link to="/ContactUs" class = 'nav-links' onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
              <li class = 'nav-item'>
                <Link to="/LocationPage" class = 'nav-links' onClick={closeMobileMenu}>
                  Location Page
                </Link>
              </li>
              <li class = 'nav-item'>
                <Link to="/StagePage" class = 'nav-links' onClick={closeMobileMenu}>
                  Stage Page
                </Link>
              </li>
              <li class = 'nav-item'>
                <Link to="/about" class = 'nav-links' onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li class = 'nav-btn'>
                {button ? (
                  <Link to = '/signup' class = 'btn-link'>
                    <Button buttonStyle = 'btn--outline'>SIGN UP</Button>
                  </Link>  
                ) : (
                  <Link to = 'signup' class = 'btn-link'>
                    <Button buttonStyle = 'btn--outline' buttonSize = 'btn--mobile' onClick={closeMobileMenu}> 
                    SIGN UP
                    </Button>
                  </Link>
                    )}

              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
