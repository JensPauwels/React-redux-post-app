import React from "react";
import "../../styles/css/screen.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Poster - React
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Add Post</Link>
          </li>
          <li>
            <Link to="/about">Overview</Link>
          </li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li>
        <a href="sass.html">Sass</a>
      </li>
      <li>
        <a href="badges.html">Components</a>
      </li>
      <li>
        <a href="collapsible.html">Javascript</a>
      </li>
      <li>
        <a href="mobile.html">Mobile</a>
      </li>
    </ul>
  </header>
);

export default Header;
