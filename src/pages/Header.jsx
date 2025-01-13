import React from 'react';
import '../Styles/Header.css';

const Header = ({ activeSection }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Tomodachi Street</div>
        <ul className="nav-links">
          {['About', 'Events', 'Gallery', 'Contact', 'Team'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;