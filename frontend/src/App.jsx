// src/App.js (Example usage)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './MyComponents/Sidebar';
import './App.css'; // Optional: for main content styling

// Placeholder components for routes
const Dashboard = () => <h2>Dashboard Content</h2>;
const Profile = () => <h2>Profile Content</h2>;
const Settings = () => <h2>Settings Content</h2>;
const Reports = () => <h2>Reports Content</h2>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
