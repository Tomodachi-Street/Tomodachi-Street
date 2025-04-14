import React, { useState } from 'react';
import '../Styles/FlipCard.css';

const EventCard = ({ event, image, title, dateString, timeString }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(prev => !prev);
  };

  const cleanDescription = (desc = '') =>
    desc
      .replace(/\[TYPE:.*?\]/i, '')
      .replace(/<a\s+href="([^"]+)"[^>]*>.*?<\/a>/gi, '$1')
      .replace(/<br\s*\/?>/gi, '\n')
      .split('\n')
      .map((line, i) => (
        <p key={i} className="mb-2">{line.trim()}</p>
      ));

  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-5">
      <div
        className={`card-flip border rounded overflow-hidden shadow ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="card-flip-inner">
          {/* Front of Card */}
          <div className="card-flip-front">
            <div className="logo-fill">
              <img src={image} alt={title} className="border-radius-15" />
            </div>
          </div>

          {/* Back of Card */}
          <div className="card-flip-back bg-dark text-white d-flex flex-column p-4">
            <h2 className="mb-3">{title}</h2>
            <p className="mb-2">
              <i className="bi bi-calendar-heart-fill"></i> {dateString}
            </p>
            <p className="mb-2">
              <i className="bi bi-stopwatch-fill"></i> {timeString}
            </p>
            {event.location && (
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill"></i> {event.location}
              </p>
            )}
            {event.description && cleanDescription(event.description)}
            <div className="mt-auto text-end">
              <a
                className="event-calendar-link"
                href={event.htmlLink}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;