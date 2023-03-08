import React from "react";
import Logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../utils/links";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={link.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
