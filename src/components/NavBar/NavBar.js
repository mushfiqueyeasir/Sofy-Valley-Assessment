import React from "react";

const NavBar = ({ handleNameChange }) => {
  return (
    <div className="bg-white ml-1">
      <div className="navbar container mx-auto py-2">
        <div className="flex-1">
          <div>
            <h2 className="text-xl">Leads</h2>
            <p>Difficulties Increase the nearer we get to the goal.</p>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  alt="avater"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-[#F9F9F9]">
        <div className="py-4  flex items-center container mx-auto  text-gray-600">
          <input
            onChange={handleNameChange}
            className="border-2 border-gray-200 bg-white h-10 px-5 pr-16  text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search in leads table"
          />
          <button type="submit" className="ml-[-30px]">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
