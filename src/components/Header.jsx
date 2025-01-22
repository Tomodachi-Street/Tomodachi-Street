import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from './DiscordIcon' ;
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/team">Team</Link>
      </nav>
      <div className="social-icons">
        <a href="https://www.instagram.com/tomodachistreet/" target="_blank" rel="noopener noreferrer" title="Visit our Instagram Page">
          <InstagramIcon style={{ color: 'white', fontSize: '24px' }} />
        </a>
        <a href="https://discord.gg/fB2VQyjWP2" target="_blank" rel="noopener noreferrer" title="Join our Discord Server">
          <DiscordIcon style={{ color: 'white', fontSize: '24px' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;