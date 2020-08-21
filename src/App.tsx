import React from 'react';
import { LocationLookup } from './components/LocationLookup';
import { Hero } from './layout/Hero';

function App() {
  return (
    <div className="App">
      <Hero title="Yo-kai Event Tracker" />
      <LocationLookup />
    </div>
  );
}

export default App;
