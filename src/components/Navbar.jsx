import React from "react";
import NavbarCSS from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <div className={NavbarCSS.navbar}>
        <h3 className={NavbarCSS.logo}>Foxxy</h3>
        <ul className={NavbarCSS.nav__links}>
          <li>
            <a href="">For Properties</a>
          </li>
          <li>
            <a href="">For Renters</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};
