import React, { useEffect, useState } from 'react';
import '../Styles/FlipCard.css';
import '../Styles/EventsPage.css';
import EventCard from '../components/EventCard';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

    // Map event types to card images
    const typeImages = {
      music: '/img/cards/music.jpg',
      social: '/img/cards/social.jpg',
      gaming: '/img/cards/gaming.jpg',
      community: '/img/cards/community.jpg',
      default: '/img/cards/default.jpg',
      spa: '/img/cards/spas.png',
      anime: '/img/cards/anime.jpg',
      warpedtour: '/img/cards/WarpedTour.jpg',
      concert: '/img/cards/concert.jpg',
      festival: '/img/cards/festival.jpg',
      fireworks: '/img/cards/fireworks.jpg',
      convention: '/img/cards/convention.jpg',
      party: '/img/cards/party.jpg',
      bbq: '/img/cards/bbq.jpg',
      bucees: '/img/cards/buc-ees.jpg',
      beach: '/img/cards/beach.jpg',
      arcade: '/img/cards/arcade.jpg',
      movie: '/img/cards/movies.png',
      squidGames: '/img/cards/squidGames.jpg',
      spongebob: '/img/cards/spongebob.jpg',
      friendsgiving: '/img/cards/friendsgiving.png'
    };
  
    // Extract type from summary
    const getEventType = (summary = '', description = '') => {
      const source = `${summary} ${description}`;
      const match = source.match(/\[TYPE:(.*?)\]/i);
      return match ? match[1].toLowerCase().trim() : 'default';
    };
     
  
  // Remove [TYPE:...] from summary
  const cleanTitle = (summary = '') =>
    summary
      .replace(/\[TYPE:.*?\]/i, '')                // Remove [TYPE:...]
      .replace(/\[Tomodachi Street\]/i, 'Tomodachi Street -') // Format prefix
      .replace(/[\[\]]/g, '')                      // Remove stray brackets
      .trim();
  

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
      <div className="events-header-container">
        <h1 className="events-header">Upcoming Events</h1>
        <div className="event-logo-container">
          <img src="/img/logo.png" alt="Tomodachi Street Logo" className="event-logo" />
        </div>
      </div>

      <div className="row justify-content-center">
        {events.map((event) => {
          const type = getEventType(event.summary, event.description);
          const image = typeImages[type] || typeImages.default;
          const title = cleanTitle(event.summary);
          const start = new Date(event.start.dateTime || event.start.date);
          const end = new Date(event.end.dateTime || event.end.date);

          const dateString = start.toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });

          const timeString = `${start.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })} - ${end.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}`;

          return (
            <EventCard
              key={event.id}
              event={event}
              image={image}
              title={title}
              dateString={dateString}
              timeString={timeString}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;