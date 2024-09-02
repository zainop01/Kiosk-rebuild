import React, { useState } from "react";
import SideNav from "../SideNav/index";
import TopNav from "../TopNav/index";
import { Outlet } from "react-router-dom";

const Layout = ({ kioskName }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-layout position-relative">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopNav kioskName={kioskName} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
