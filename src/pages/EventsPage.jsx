import React from 'react';
import '../styles/EventsPage.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-header">
        <h1 className="text-white text-uppercase">Upcoming Events</h1>
        <div className="logo-container">
          <img src="/img/logo.png" alt="Tomodachi Street Logo" className="events-logo" />
        </div>
      </div>
      <p className="event-description text-white">Stay tuned for exciting upcoming events!</p>
    </div>
  );
};

export default EventsPage;
