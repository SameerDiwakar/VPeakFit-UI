import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <ul>
            <li>
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Food Essentials
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Eating Well
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
