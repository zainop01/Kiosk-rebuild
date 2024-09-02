import React, { useState } from "react";
import SideNav from "../SideNav/index";
import TopNav from "../TopNav/index";

const Layout = ({ children, kioskName }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-layout position-relative">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content position-relative ">
        <TopNav kioskName={kioskName} toggleSidebar={toggleSidebar} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
