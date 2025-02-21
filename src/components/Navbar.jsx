import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 border mb-3">
        <div className="flex-none ">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Task mangement</a>
        </div>
        <div className="flex-none pr-4">
          <NavLink to={'/authlayouts/login'} className="md:px-10 border py-2 rounded px-8 bg-violet-500 text-white border-s-teal-300/20">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
