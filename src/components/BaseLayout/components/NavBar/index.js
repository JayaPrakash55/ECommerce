import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="selected" className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
