import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  //   const [click, setClick] = useState(false);
  //   const handleClick = () => {
  //     setClick(!click);
  //   };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="./src/assets/images/SunLogo.png"></img>
            Chill Bro
          </Link>
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid" : "fa-bars"}></i>
          </div> */}
        </div>
        <div className="tabs">
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="gallery">Gallery</div>
          <div className="contacts">Contacts</div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
