// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>App Menu</h2>
      </div>
      <nav className="nav-links">
        {/* Use Link components from react-router-dom for navigation */}
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </div>
  );
};

export default Sidebar;