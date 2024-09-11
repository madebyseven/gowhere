import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <NavLink
        to="/explore"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Explore
      </NavLink>
      <NavLink
        to="/trendspot"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Trendspot
      </NavLink>
      <NavLink
        to="/trendspot"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Where you at?
      </NavLink>
    </div>
  );
};

export default NavLinks;
