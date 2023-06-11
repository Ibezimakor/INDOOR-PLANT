import React from "react";
import "./Nav_Bar.css";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logo from "../../Images/Logo.png";

export default function Nav_Bar() {
  return (
    <nav>
      <div className="Indoor_Plant_Nav_Bar">
        <div className="Indoor_Plant_Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Indoor_Plant_Link">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="Indoor_Plant_Icons">
          <ul>
            <li className="icon">
              <BiSearch />
            </li>
            <li className="icon">
              <MdOutlineShoppingCart />
            </li>
            <li className="icon">
              <CgProfile />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
