import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <span className="navbar-toggler-icon">
          <a className="nav-link" href="#">
            Home
          </a>
        </span>
        <span className="navbar-text mx-3">
          <a className="nav-link" href="#">
            Houses
          </a>
        </span>
        <span className="navbar-text mx-3">
          <a className="nav-link" href="#">
            Spells
          </a>
        </span>
        <span className="navbar-text mx-3">
          <a className="nav-link" href="#">
            Potions
          </a>
        </span>
      </div>
    </nav>
  );
}
