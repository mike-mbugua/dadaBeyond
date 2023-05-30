import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav__container">
      <div className="nav__logo">
        <span>
          Dada<span className="beyond__logo">Beyond</span>
        </span>
      </div>
      {/* NAv links */}

      <div className="nav__links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Events</a>
        <a href="#">Mission</a>
        <a href="#">Membership</a>
        <a href="#">Gallery</a>
      </div>
    </div>
  );
}

export default NavBar;
