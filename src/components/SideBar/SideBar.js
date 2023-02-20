import React from "react";
import { NavLink } from "react-router-dom";
import { sideBarLinks } from "./sidebarLinks";

const SideBar = () => {
  return (
    <section>
      <div className="text-3xl text-center pt-4 font-bold">
        <h2 className="text-orange-500">
          Soft<span className="text-blue-900">VallEy</span>
        </h2>
      </div>

      <div className="flex items-center justify-center gap-6 pt-10">
        <div className="text-2xl font-bold bg-gray-100 rounded-full p-3 px-4">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="text-lg font-semibold">
          <h2>Hello! Good Evening</h2>
          <h2>Admin</h2>
        </div>
      </div>
      <hr className="mt-2 border-1 border-gray-300" />

      <div className="flex flex-col pt-10">
        <div>
          {sideBarLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item[1]}
              className="flex items-center gap-4 text-xl pl-16 py-3"
            >
              <div>
                <i className={item[2]}></i>
              </div>
              <div>
                <h2>{item[0]}</h2>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
