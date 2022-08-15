import './App.css';
import { useState } from 'react';

import WeatherData from './WeatherData.js';
import Location from './Location/Location.js';
import Cities from './cities/cities.js';
import NYC from './cities/nyc.jpg';

function App() {
  const API_key = 'fc38166d48d39f532d2ad0e8dde12273'
  const randLat = (Math.random()*180 - 90).toFixed(2);
  const randLon = (Math.random()*360 - 180).toFixed(2);
    
    const [lon, setLon] = useState(randLat);
    const [lat, setLat] = useState(randLon);

    const [city, setCity] = useState("");
    const [imgLink, setImglink] = useState("");

    function handleClick(acity, longitude, latitude, imglink){
        setCity(acity); 
        setLon(longitude);
        setLat(latitude);
        setImglink(imglink);
    }


  return (
    <div className="App">
      <Location lon={lon} lat={lat} setLon={setLon} setLat={setLat}/>
      <WeatherData lon={lon} lat={lat} apiKey={API_key}/>
      <Cities onClick={handleClick} />
      {(city != "") && <img src={NYC} style={{height:"400px",width:"400px"}}/>}
    </div>
  );
}

export default App;
