import React, { useState } from "react";
import logo from "./Images/logo.svg";
import iconOpen from "./Images/icon-menu.svg";
import iconClose from "./Images/icon-menu-close.svg";

function Header() {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    setNav(!nav);
  }
  return (
    <div className="header container">
      <img className="logo" src={logo} />
      <div className="navWrap" id={nav ? "close" : "open"}>
        <ul className="navbar">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className="nav" onClick={toggleNav}>
        <img src={nav ? iconOpen : iconClose} />
      </div>
    </div>
  );
}

export default Header;
