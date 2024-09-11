import React from "react";
import { NavLink } from "react-router-dom";

const NavLinksMobile = (props) => {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <NavLink
            to="/explore"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Explore
          </NavLink>
          <NavLink
            to="/trendspot"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Trendspot
          </NavLink>
          <NavLink
            to="/trendspot"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Where you at?
          </NavLink>
        </div>
        <div className="py-6">
          <NavLink
            to="/login"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLinksMobile;
