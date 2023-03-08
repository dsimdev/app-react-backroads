import React from "react";
import { pageLinks, socialLinks } from "../utils/links";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            return (
              <li>
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <li>
                <a
                  href={link.href}
                  target="_blank"
                  className="footer-icon"
                  alt={link.text}
                  rel="noreferrer"
                >
                  <i className={link.icon} />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright © Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
