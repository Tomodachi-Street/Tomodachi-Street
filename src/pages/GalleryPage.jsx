import React from 'react';
import '../Styles/GalleryPage.css';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {/* Header Section */}
      <div className="gallery-header">
        <h1 className="gallery-title text-white text-uppercase">Gallery</h1>
        <div className="gallery-logo">
          <img src="/img/logo.png" alt="Logo" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
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
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default GalleryPage;
