import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/codax-high-resolution-logo-transparent.png";
import menu_icon from "../../assets/menu_icon.svg";
import { Link, ScrollLink } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMibileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMibileMenu(false) : setMibileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <a href="https://codax-dev.web.app/">
        <img src={Logo} alt="" className="logo" title="Logo"/>
      </a>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>
            <h4>Home</h4>
          </Link>
        </li>
        <li>
          <Link to="Programs" smooth={true} offset={-260} duration={500}>
            <h4>program</h4>
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} offset={-150} duration={500}>
            <h4>About us</h4>
          </Link>
        </li>
        <li>
          <Link to="Campus" smooth={true} offset={-260} duration={500}>
            <h4>Campus</h4>
          </Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} offset={-260} duration={500}>
            <h4>Testimonials</h4>
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="Contact" smooth={true} offset={-260} duration={500}>
              <h5>Contact us</h5>
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu} title="taskbar"/>
    </nav>
  );
}

export default Navbar;
