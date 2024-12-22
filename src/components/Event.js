import React from 'react';

function Event({ event }) {
  return (
    <li>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </li>
  );
}

export default Event;
