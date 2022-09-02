import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Navbar.css";
import logo from '../assets/Logo.png';
import picvid from '../components/PicVid';


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
    return (
      <header>
        <img src={logo} className="m-logo" width="250" alt="logo"/>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/#">Meet The Creator</a>
          <a href="#video_section" class="btn" data-toggle="collapse">UGC Examples</a>
          <a href="/#">Pricing</a>
          <a href="/#">Contact Me</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      );
}

export default Navbar;
