import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = ({ navigate, icon, text }) => {
  return (
    <>
      <NavLink
        to={navigate}
        className="flex items-center gap-1 px-3 py-2 rounded-lg "
      >
        {icon}
        <span className="">{text}</span>
      </NavLink>
    </>
  );
};

export default Navigate;
