import React from 'react';

const EventPage = ({ event }) => (
  <div className="event-page">
    <h1>{event.name}</h1>
    <p>{event.description}</p>
    <p>Date: {event.date}</p>
    <p>Location: {event.location}</p>
  </div>
);

export default EventPage;
