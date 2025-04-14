import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from './DiscordIcon';
import '../Styles/Header.css';
import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="bg-dark" data-bs-theme="dark">
      <nav className="navbar navbar-expand-lg">
        <div className="container align-items-center">
          {/* Logo always on left */}
          <div className="logo-fill">
            <Link to="/">
              <img src="/img/logo.png" alt="Tomodachi Street Logo" className="header-logo" />
            </Link>
          </div>

          {/* Hamburger toggle */}
          <button
            className={`navbar-toggler ${isOpen ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon">
              <span className="bar top-bar"></span>
              <span className="bar middle-bar"></span>
              <span className="bar bottom-bar"></span>
            </span>
          </button>

          {/* Collapsible content */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <div className="d-lg-flex justify-content-between w-100 align-items-center">
              {/* Left nav on desktop only */}
              <ul className="navbar-nav mainnav mb-2 mb-lg-0 me-lg-auto justify-content-center justify-content-lg-start">
                <li className="nav-item">
                  <Link className="nav-link link-light text-uppercase" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-light text-uppercase" to="/events" onClick={() => setIsOpen(false)}>Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-light text-uppercase" to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link link-light text-uppercase" to="/team" onClick={() => setIsOpen(false)}>Team</Link>
                </li>
              </ul>

              {/* Social icons always on right */}
              <ul className="navbar-nav social-icons ms-lg-auto d-flex flex-row flex-lg-row">
                <li className="nav-item">
                  <a className="nav-link text-white" href="https://www.instagram.com/tomodachistreet/" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="https://discord.gg/fB2VQyjWP2" target="_blank" rel="noreferrer">
                    <DiscordIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
