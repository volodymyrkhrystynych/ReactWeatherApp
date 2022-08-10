import './App.css';
import { useState } from 'react';

import WeatherData from './WeatherData.js';
import Location from './Location/Location.js';
import Cities from './cities/cities.js';

function App() {
  const API_key = 'fc38166d48d39f532d2ad0e8dde12273'
  const randLat = (Math.random()*180 - 90).toFixed(2);
  const randLon = (Math.random()*360 - 180).toFixed(2);
    
    const [lon, setLon] = useState(randLat);
    const [lat, setLat] = useState(randLon);

    const [city, setCity] = useState("");

    function handleClick(acity, longitude, latitude){
        setCity(acity); 
        setLon(longitude);
        setLat(latitude);
    }


  return (
    <div className="App">
      <Location lon={lon} lat={lat} setLon={setLon} setLat={setLat}/>
      <WeatherData lon={lon} lat={lat} apiKey={API_key}/>
      <Cities onClick={handleClick} />
    </div>
  );
}

export default App;
