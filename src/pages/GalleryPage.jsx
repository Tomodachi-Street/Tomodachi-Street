import React from 'react';
import '../Styles/GalleryPage.css';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {/* Header Section */}
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-logo-container">
          <img src="/img/logo.png" alt="Tomodachi Street Logo" className="gallery-logo" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/WQyNjC9rgnVzTjTRA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery5.jpg" alt="Sakura Matsuri 2024" />
          </a>
          <p className="gallery-label">Sakura Matsuri 2024</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/Edbu3rhQ4nzhwreP6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery4.jpg" alt="Tidal Basin Cherry Blossom Meet 2024" />
          </a>
          <p className="gallery-label">Tidal Basin Cherry Blossom Meet 2024</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/BLogocY83wmnR2g2A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery1.jpg" alt="Summer Potluck 2024" />
          </a>
          <p className="gallery-label">Summer Potluck 2024</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/MeU54EJMrKBxbGDt6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery2.jpg" alt="Big Bounce 2024" />
          </a>
          <p className="gallery-label">Big Bounce 2024</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/NcuNWK2c22fz3HzD8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery3.jpg" alt="Ocean City Beach Trip 2024" />
          </a>
          <p className="gallery-label">Ocean City Beach Trip 2024</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/4s63XJQ8fht3aKrf9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery6.jpg" alt="MAGFest 2025" />
          </a>
          <p className="gallery-label">MAGFest 2025</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/aUKvFbxaWLTMKd4FA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery7.jpg" alt="Katsucon 2025" />
          </a>
          <p className="gallery-label">Katsucon 2025</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/jjaU6AwTdzFvjwmw6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery8.jpg" alt="St. Patrick's Day 2025" />
          </a>
          <p className="gallery-label">St. Patrick's Day 2025</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/oMyKQcctJMuaJ2ww5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery10.jpg" alt="Superbowl Watch Party 2025" />
          </a>
          <p className="gallery-label">Superbowl Watch Party 2025</p>
        </div>
        <div className="gallery-item">
          <a
            href="https://photos.app.goo.gl/XEv7xvdYbNuRCmoK6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/gallery9.jpg" alt="Tomodachi Street 1st Year Anniversary" />
          </a>
          <p className="gallery-label">Tomodachi Street 1st Year Anniversary</p>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default GalleryPage;
