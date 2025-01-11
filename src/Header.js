import React, { useState } from "react";
import { FaTachometerAlt, FaChalkboardTeacher, FaUsers, FaBrain, FaChartLine, FaClipboardList, FaBell, FaCaretDown } from "react-icons/fa";
import './Header.css'; // Import the external CSS file

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <h1 className="companyName">Firstbench</h1>
      <nav>
        <ul className="navList">
          <li className="navItem">
            <FaTachometerAlt className="icon" />
            <span>Dashboard</span>
          </li>
          <li className="navItem">
            <FaChalkboardTeacher className="icon" />
            <span>FirstGuru</span>
          </li>
          <li className="navItem">
            <FaUsers className="icon" />
            <span>TownHall</span>
          </li>
          <li className="navItem">
            <FaBrain className="icon" />
            <span>AI Evaluation</span>
          </li>
          <li className="navItem">
            <FaChartLine className="icon" />
            <span>Performance</span>
          </li>
          <li className="navItem">
            <FaClipboardList className="icon" />
            <span style={{color :"aqua"}}>Mock Test</span>
          </li>
        </ul>
      </nav>
      <div className="profileSection">
        <FaBell className="icon" /> {/* Silent/Notification Icon */}
        <div className="profileDropdown" onClick={toggleDropdown}>
          <span className="profileText">Profile</span>
          <FaCaretDown className="icon" />
        </div>
        {showDropdown && (
          <div className="dropdownMenu">
            <ul className="dropdownList">
              <li>View Profile</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
