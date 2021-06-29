import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer class="site-footer">
      <div className="nav-logo">
        <NavLink to="/">Blog.</NavLink>
      </div>
      <p>© 2020 Company Name. All rights reserved.</p>
    </footer>
  );
};
