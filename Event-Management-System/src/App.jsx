import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import EventPage from './components/EventPage/EventPage';
import RSVPForm from './components/RSVPForm/RSVPForm';

function App() {
  const [events] = useState([
    { id: 1, name: 'React Meetup', description: 'Learn React!', date: '2024-01-10', location: 'Online' },
    { id: 2, name: 'JavaScript Conference', description: 'Deep dive into JS.', date: '2024-02-15', location: 'New York' },
  ]);

  const handleRSVP = (name) => {
    console.log(`${name} has RSVP'd`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard events={events} />} />
        <Route path="/events/:id" element={<EventPage event={events[0]} />} />
        <Route path="/rsvp" element={<RSVPForm onRSVP={handleRSVP} />} />
      </Routes>
    </Router>
  );
}

export default App;

