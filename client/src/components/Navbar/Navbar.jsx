import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Modes from '../Modes/Modes';

const Navbar = ({ auth, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='burger-menu' onClick={handleMenuToggle}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <h1>
        <Link to='/home' className='logo'>
          PineApple
        </Link>
      </h1>
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        {auth ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <Link to='/dashboard'>
              <button>Dashboard</button>
            </Link>
          </>
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}
        <Link to='/courses'><button>courses</button></Link>
        <div>
        <Modes/>
        </div>
      </div>
      <input type='search' placeholder='search'></input>
    </div>
  );
};

export default Navbar;