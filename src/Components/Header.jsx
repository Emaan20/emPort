import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  return (
    <div className="over">
      <header>
        <h1 >  <Link to="/">Portfolio</Link></h1>
        <nav>
          <ul className="header-list">
            <li className="header-item">
            <Link to="/main">About Me</Link>
            </li>
            <li className="header-item">
            <Link to="/proj">My Projects</Link>
            </li>
            <li className="header-item">
            <Link to="/contact">Say Hello</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
