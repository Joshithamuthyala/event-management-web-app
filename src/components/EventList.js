import React from 'react';
import Event from './Event';

function EventList({ events }) {
  return (
    <ul>
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
