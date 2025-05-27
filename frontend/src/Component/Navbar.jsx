import React, { useState } from 'react';
import '../Styles/Navbar.css';
import {
  Bell, Search, Menu, Home, Calendar,
  MessageSquare, Settings, History, Phone, X
} from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="navbar">
      {/* Toggle Icon (☰ or X) */}
      <div className="menu-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Sidebar Nav (visible only on mobile) */}
      <nav className={`sidebar__nav ${isSidebarOpen ? 'open' : ''}`}>
        <p>General</p>
        <ul>
          <li className="active"><Home size={20} /><span>Dashboard</span></li>
          <li><History size={20} /><span>History</span></li>
          <li><Calendar size={20} /><span>Calendar</span></li>
          <li><Calendar size={20} /><span>Appointments</span></li>
          <li><Calendar size={20} /><span>Statistics</span></li>
          <li><MessageSquare size={20} /><span>Chat</span></li>
          <li><Phone size={20} /><span>Support</span></li>
          <li><Settings size={20} /><span>Settings</span></li>
        </ul>
      </nav>

      {/* Logo */}
      <div className="navbar__logo">
        <h1><span className="logo-highlight">Health</span>care.</h1>
      </div>

      {/* Search and Notifications */}
      <div className="navbar__search-section">
        <div className="navbar__search">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar__notification">
          <Bell size={22} color="#555" />
        </div>
      </div>

      {/* Profile */}
      <div className="navbar__profile">
        <div className="navbar__user">
          <img src="https://healthcare-assignment-esvf-om-shindes-projects-649c0a36.vercel.app/assets/avatar-jaabb4_w.png" alt="avatar" />
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
};

export default Navbar;
