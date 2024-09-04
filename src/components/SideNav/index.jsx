import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import sideNavData from "./SideNavData";
import profileImage from "../../assets/img/avatars/avatar1.png";

const SideNav = ({ isSidebarOpen, toggleSidebar }) => {
  const [openSections, setOpenSections] = React.useState({});
  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const isChildActive = (items) => {
    return items.some((item) => location.pathname === item.path);
  };

  React.useEffect(() => {
    const initialOpenSections = {};
    sideNavData.forEach((item) => {
      if (item.collapse && isChildActive(item.items)) {
        initialOpenSections[item.name] = true;
      }
    });
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      ...initialOpenSections,
    }));
  }, [location.pathname]);

  return (
    <>
      <div className={`sidenav heading-xs ${isSidebarOpen ? "open" : ""}`}>
        {isSidebarOpen && (
          <div className="close-icon" onClick={toggleSidebar}>
            <FaTimes />
          </div>
        )}
        <div className="profile-wrapper">
          <div className="profile-section d-flex mb-5">
            <img
              src={profileImage}
              className="profile-image d-flex"
              alt="Profile"
            />
            <div>
              <div className="profile-name">Jafar Jan</div>
              <div className="profile-role">Admin</div>
            </div>
          </div>
        </div>
        <ul className="sidenav-items">
          {sideNavData.map((item, index) => (
            <li key={index}>
              {item.collapse ? (
                <>
                  <div
                    className={`sidenav-item collapsible ${
                      isChildActive(item.items) ? "active" : ""
                    }`}
                    onClick={() => toggleSection(item.name)}
                  >
                    <div className="icon fs-4">
                      <i>{item.icon}</i>
                    </div>
                    <span>{item.name}</span>
                    <div className="collapse-icon heading-sm ms-auto">
                      {openSections[item.name] ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </div>
                  </div>
                  <ul
                    className={`sidenav-submenu ${
                      openSections[item.name] ? "open" : ""
                    }`}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="ms-5 py-2">
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidenav-item ${isActive ? "active" : ""}`
                  }
                >
                  <div className="icon">
                    <i className="fs-4">{item.icon}</i>
                  </div>
                  <span>{item.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {/* Footer Section */}
        <div className="sidenav-footer">
          <p>2024 Sodaclick Ltd.</p>
          <NavLink to="/terms-of-service">Terms of service</NavLink> -
          <NavLink to="/billing-terms">Billing terms</NavLink> -
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNav;
