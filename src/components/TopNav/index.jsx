import React from "react";
import { BsBell, BsFillMoonFill, BsInfoCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa"; // Import FaBars for the hamburger menu
import logo from "../../assets/logo/Sodaclick-Sephona-Logo.svg";
import profileImage from "../../assets/img/avatars/avatar1.png";
import SearchBar from "../sharedcomponents/SearchBar";

const TopNav = ({ kioskName, toggleSidebar }) => {
  return (
    <div className="top-nav">
      <div className="brand">
        <FaBars className="hamburger-menu" onClick={toggleSidebar} /> {/* Hamburger Menu */}
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
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default TopNav;
