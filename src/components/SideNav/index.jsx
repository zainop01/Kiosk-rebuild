import React from "react";
import { NavLink } from "react-router-dom";
import sideNavData from "./SideNavData/index";
import profileImage from "../../assets/img/avatars/avatar1.png";

const SideNav = () => {
  return (
    <>
      <div className="side-nav-main">
        <div className="side-nav">
          <div className="profile-section d-flex">
            {/* Uncomment the line below if you want to display the profile image */}
            <img src={profileImage} className="profile-image d-flex" alt="Profile" />
            <div>
              <div className="profile-name">Jafar Jan</div>
              <div className="profile-role">Admin</div>
            </div>
          </div>
          <div className="menu-items">
            {sideNavData.map((item) => (
              <NavLink 
                to={item.link} 
                key={item.id} 
                className={({ isActive }) => 
                  isActive ? "menu-item active-class" : "menu-item"
                }
                end
              >
                <i>
                {item.icon}
                </i>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
