import React from "react";
import Topbar from "./component/toolbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import "./admin.scss";
import { Outlet } from "react-router-dom";

const admin = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default admin;
