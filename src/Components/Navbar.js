import React from "react";
import logo from "../Assets/Logos/logo-dark.svg";

export const Navbar = () => {
  return (
    <div>
      <ul className="items-center flex list-none">
        <li className="mr-5 font-medium cursor-pointer">
          <img className="h-6" src={logo} alt="" />
        </li>
        <li>jonh dowe</li>
        <li>logout</li>
      </ul>
    </div>
  );
};
