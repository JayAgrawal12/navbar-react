import React from "react";

import {Link,NavLink} from "react-router-dom";

import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Website
        </Link>
      <ul>
        <li>
          <NavLink to="/about" target="_blank">About</NavLink>
          </li>
        <li>
          <NavLink to="/services" target="_blank">Services</NavLink>
          </li>
        <li>
          <NavLink to="/contacts" target="_blank">Contacts</NavLink>
          </li>
      </ul>
    </nav>
  );
}