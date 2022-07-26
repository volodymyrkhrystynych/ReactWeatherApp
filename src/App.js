import './App.css';
import { useState } from 'react';

import WeatherData from './WeatherData.js';
import Location from './Location/Location.js';

function App() {
  const API_key = 'fc38166d48d39f532d2ad0e8dde12273'
  const randLat = (Math.random()*180 - 90).toFixed(2);
  const randLon = (Math.random()*360 - 180).toFixed(2);

  const [lon, setLon] = useState(randLat)
  const [lat, setLat] = useState(randLon)

  return (
    <div className="App">
      <Location lon={lon} lat={lat} setLon={setLon} setLat={setLat}/>
      <WeatherData lon={randLon} lat={randLat} apiKey={API_key}/>
    </div>
  );
}

export default App;
