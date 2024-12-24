import React, { useState } from 'react';

const RSVPForm = ({ onRSVP }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRSVP(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <button type="submit">RSVP</button>
    </form>
  );
};

export default RSVPForm;
