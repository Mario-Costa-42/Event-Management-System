import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api',
});

export const fetchEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const rsvpToEvent = async (eventId, userData) => {
  const response = await api.post(`/events/${eventId}/rsvp`, userData);
  return response.data;
};
