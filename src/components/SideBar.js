import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
import { links } from "../constants/links";
import { socialLinks } from "../constants/socialLinks";
import { FaTimesCircle } from "react-icons/fa";
import { useToggleContext } from "../context/toggle_context";

const SideBar = () => {
  const { isSideBarOpen, toggleSide } = useToggleContext();

  return (
    <aside className={`${isSideBarOpen ? `sidebar show-sidebar` : `sidebar`}`}>
      {isSideBarOpen && (
        <button className="close-btn" onClick={toggleSide}>
          <FaTimesCircle />
        </button>
      )}
      <div className="fl-col">
        <ul className={`${isSideBarOpen && ` sidebar-links `}   `}>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={toggleSide}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={`${isSideBarOpen && ` sidebar-icons`}`}>
          {socialLinks.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url} className="social-link" onClick={toggleSide}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
