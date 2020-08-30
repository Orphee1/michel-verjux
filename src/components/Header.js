import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

export default function Header() {
  return (
    <div className="header red">
      <div className="nav orange">
        <ul className="logo-nav">
          <li>
            <Link to="/">
              <h1 className="logo">Michel Verjux</h1>
            </Link>
          </li>
          <li>
            <span>Log in</span>
          </li>
        </ul>
        <ul className="mini-nav">
          <li>
            <Link to="/image">
              <span>Images</span>
            </Link>
          </li>
          <li>
            <Link to="/text">
              <span>Textes</span>
            </Link>
          </li>
          <li>
            <Link to="/bio">
              <span>Bio</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
