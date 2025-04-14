import React, { useEffect, useState } from 'react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((config) => {
        const API_KEY = config.REACT_APP_GOOGLE_API_KEY;
        const CALENDAR_ID = config.REACT_APP_CALENDAR_ID;
        const timeMin = new Date().toISOString();

        fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            CALENDAR_ID
          )}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${timeMin}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.items) setEvents(data.items);
          });
      })
      .catch((err) => console.error('Failed to load config or events:', err));
  }, []);

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      {events.length === 0 && <p>No upcoming events.</p>}
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h2>{event.summary}</h2>
          <p>
            {new Date(event.start.dateTime || event.start.date).toLocaleString()}
          </p>
          {event.description && <p>{event.description}</p>}
          {event.location && <p><strong>Location:</strong> {event.location}</p>}
        </div>
      ))}
    </div>
  );
};

export default EventsPage;