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
            <Link className="sidenav-close" to="/">
              Add Post
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/about">
              Overview
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li>
        <Link className="sidenav-close" to="/">
          Add Post
        </Link>
      </li>
      <li>
        <Link className="sidenav-close" to="/about">
          Overview
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
