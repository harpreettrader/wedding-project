import React from "react";
import weddingImage from "../images/wedding.jpg";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from  "../images/profile.jpg"
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={weddingImage} alt="Wedding" />
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a>
              <img src={Profile} alt="Profile" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
