import React from "react";
import { NavLink } from "react-router-dom";
import {} from "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar__section">
      <header className="page-navbar">
        <div className="page-navbar__content">
          <div className="nav-logo">
            <NavLink to="/">Blog.</NavLink>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/recent">Recent</NavLink>
              </li>
              <li>
                <NavLink to="/">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/">Featured</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
