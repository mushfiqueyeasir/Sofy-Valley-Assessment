import React from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 shadow-lg min-h-[100vh] ">
        <SideBar />
      </div>

      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
