import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { Bell, Search, User,Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Company Logo */}
          <Menu className='menu-bar' ></Menu>
      <div className="navbar__logo">
        <h1>
          <span className="logo-highlight">Health</span>care.
        </h1>
      </div>
      
      {/* Search bar + Notification */}
      <div className="navbar__search-section">
        <div className="navbar__search">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar__notification">
          <Bell size={22} color="#555" />
        </div>
      </div>

      {/* Profile + Add Button */}
      <div className="navbar__profile">
        <div className="navbar__user">
          <img src="https://healthcare-assignment-esvf-om-shindes-projects-649c0a36.vercel.app/assets/avatar-jaabb4_w.png" alt="" />
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
};

export default Navbar;
