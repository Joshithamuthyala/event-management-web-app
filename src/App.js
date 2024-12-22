import React, { useState } from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Header from './components/Header';


function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="App">
      <h1>Event Management App</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;
