import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ events }) => (
  <div className="dashboard">
    <h1>Event Management </h1>
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <Link to={`/events/${event.id}`}>{event.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
