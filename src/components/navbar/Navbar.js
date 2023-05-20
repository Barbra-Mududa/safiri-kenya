import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";


function Navbar({ user, setUser }) {
  const aLink = () => {
    const links = document.querySelector(".middle-nav");
    const menu = document.querySelector(".menu");
    links.classList.remove("active");
    menu.classList.remove("clicked");
  };

  return (
    <nav>
      <div className="nav-header">
        <NavLink to="/" id="header" onClick={aLink}>
          Safiri Kenya
        </NavLink>
      </div>

      <div className="middle-nav">
        <div className="container1-nav">
          <NavLink to="/about" className="navlink" onClick={aLink}>
            About
          </NavLink>
          <NavLink to="/travel" className="navlink" onClick={aLink}>
            Experience
          </NavLink>
          <NavLink to="/blog" className="navlink" onClick={aLink}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="navlink" onClick={aLink}>
            Contact{" "}
          </NavLink>
          <button id="login">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;