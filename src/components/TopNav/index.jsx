import React, { useState } from "react";
import { BsBell, BsFillMoonFill, BsInfoCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo/Sodaclick-Sephona-Logo.svg";
import profileImage from "../../assets/img/avatars/avatar1.png";
import SearchBar from "../sharedcomponents/SearchBar";

const TopNav = ({ kioskName, toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="top-nav">
      <div className="brand">
        <img src={logo} className="logo m-0 p-0" alt="Logo" />
        <span className="brand-name">{kioskName}</span>
      </div>
      <div className="nav-icons">
        <div>
          <SearchBar placeholder="Search" borderRadius="30px" />
        </div>
        <BsBell size={15} className="icon" />
        <BsFillMoonFill size={15} className="icon" />
        <BsInfoCircle size={15} className="icon" />
        <FaBars className="hamburger-menu ms-4" onClick={toggleSidebar} />
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
          onClick={toggleDropdown}
        />
        <div className={`profile-dropdown me-4 ${dropdownOpen ? 'open' : ''}`}>
          <div className="dropdown-header">
            <span role="img" aria-label="wave">👋</span> Hey, Jafar
          </div>
          <div className="dropdown-item">Profile Settings</div>
          <div className="dropdown-item logout">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
