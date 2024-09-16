import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <div className="header">
    <h1 id="header-title">Shop Now</h1>
    <div className="links-header">
      <p>
        <Link
          activeClassName="selected"
          className="nav-link-header"
          to="/women"
        >
          Women
        </Link>
      </p>
      <p>
        <Link activeClassName="selected" className="nav-link-header" to="/men">
          Men
        </Link>
      </p>
      <p>
        <Link
          activeClassName="selected"
          className="nav-link-header"
          to="/clothes"
        >
          Clothes
        </Link>
      </p>
      <p>
        <Link
          activeClassName="selected"
          className="nav-link-header"
          to="/accessories"
        >
          Accessories
        </Link>
      </p>
    </div>
  </div>
);

export default Header;
