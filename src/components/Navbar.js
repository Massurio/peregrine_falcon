import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CaminoShell } from './caminoShellIcon';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
export default function Navbar({ user, setUser }) {
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

  const logOut = (e) => {
    localStorage.removeItem('myToken');
    setUser();
  };
  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: 'yellow' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <CaminoShell className="navbar-icon" />
              {/* <IoIosCompass className = 'navbar-icon' /> */}
              Camino de Santiago
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <div className='user-hello'>
  
             {user && <h1>Hello {user}</h1>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {/* <li className = 'nav-item'>
                <Link to="/" className = 'nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              </li>  */}

              {user ? (
                <li onClick={logOut} className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    LogOut
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              )}
              {user ? (
                <li className="nav-item">
                  <Link
                    to="/UserPage"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    UserPage
                  </Link>
                </li>
              ) : (
                ''
              )}

              {user ? (
                <li className="nav-item">
                  <Link
                    to="/LocationPage"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Location Page
                  </Link>
                </li>
              ) : (
                ''
              )}
              {user ? (
                <li className="nav-item">
                  <Link
                    to="/StagePage"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Stage Page
                  </Link>
                </li>
              ) : (
                ''
              )}

              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/ContactUs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              {!user ? (
                <li className="nav-btn">
                  {button ? (
                    <Link to="/signup" className="btn-link">
                      <Button buttonStyle="btn--outline">SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to="signup" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                        onClick={closeMobileMenu}
                      >
                        SIGN UP
                      </Button>
                    </Link>
                  )}
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
