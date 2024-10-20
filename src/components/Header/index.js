import React from 'react';
import './index.css'; // Import CSS for styling
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} className='nav-logo'/>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Plant & Pots</a></li>
        <li><a href="/services">Tools</a></li>
        <li><a href="/contact">Our service</a></li>
        <li><a href="/contact">Our Story</a></li>
        <li><a href="/contact">Blog</a></li>
        <li><a href="/contact">FAQs</a></li>

      </ul>
      <div className='cart-section'>
        <span className="bar">Mycart</span>
        <span className="bar">Profile</span>
      </div>
    </nav>
  );
};

export default Header;
