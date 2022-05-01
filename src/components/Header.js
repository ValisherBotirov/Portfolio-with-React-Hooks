import React from "react";
import "../index.css";

const Header = () => {
  return (
    <div className="header--section">
      <a href="#" className="header--logo">
        ValisherBotirov
      </a>
      <ul className="header--list">
        <li className="header--item">
          <a href="accordion" className="header--link">
            Accordion
          </a>
        </li>
        <li className="header--item">
          <a href="search" className="header--link">
            Wikipedia
          </a>
        </li>
        <li className="header--item">
          <a href="dropdown" className="header--link">
            Dropdown
          </a>
        </li>
        <li className="header--item">
          <a href="translate" className="header--link">
            Translate
          </a>
        </li>
        <li className="header--item">
          <a href="#" className="header--link">
            YouTobe
          </a>
        </li>
        <li className="header--item">
          <a href="#" className="header--link">
            Images
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
