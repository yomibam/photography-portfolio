import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/Menu.png";

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-[10%] py-[10%] lap:py-[5%]">
      <Link to="/" className="text-white">
        iSHOT
      </Link>
      <div className="hidden lap:flex lap:gap-[30px] lap:text-white">
        <Link to="/fashion">FASHION</Link>
        <Link to="/wedding">WEDDING</Link>
        <Link to="/retouching">RETOUCHING</Link>
      </div>
      <Link to="/contact" className="hidden lap:block lap:text-white">
        CONTACT
      </Link>
      <img src={menuIcon} alt="menu" className="w-[25px] h-[25px] lap:hidden" />
    </div>
  );
}
