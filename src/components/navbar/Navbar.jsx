import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { CgMenuHotdog } from "react-icons/cg";
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="kai__navbar">
      <div className="kai__navbar-links">
        <div className="kai__navbar-links_container">
          <p><a href="#home">Arafat</a></p>
        </div>
      </div>
      <div className="kai__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={38} onClick={() => setToggleMenu(false)} />
          : <CgMenuHotdog color="#fff" size={38} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="kai__navbar-menu_container scale-up-center">
          <div className="kai__navbar-menu_container-links">
            <p><a href="#about">About</a></p>
            <p><a href="#skillspage">My SKills</a></p>
            <p><a href="#design">Contact Me</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
