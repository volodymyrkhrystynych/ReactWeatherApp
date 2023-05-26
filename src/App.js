import './App.css';
import { useState } from 'react';

import WeatherData from './WeatherData.js';
import Location from './Location/Location.js';
import Cities from './cities/cities.js';
import NYC from './cities/nyc.jpg';
import Tok from './cities/tokyo.jpg';
import london from './cities/london.jpg';
import earth from './cities/mercator.jpg';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const randLat = (Math.random()*180 - 90).toFixed(2);
  const randLon = (Math.random()*360 - 180).toFixed(2);
    
    const [lon, setLon] = useState(randLat);
    const [lat, setLat] = useState(randLon);

    const [city, setCity] = useState("");
    const [imgLink, setImglink] = useState(earth);

    function handleClick(acity, longitude, latitude, imglink){
        setCity(acity); 
        setLon(longitude);
        setLat(latitude);
        if (acity == "New York"){
          setImglink(NYC);
        } else if (acity == "Tokyo"){
          setImglink(Tok);
        } else if (acity == "London"){
          setImglink(london);
        }
    }


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} width="100%">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather
            </Typography>
            <Location lon={lon} lat={lat} setLon={setLon} setLat={setLat}/>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{backgroundImage:`url(${imgLink})`, height:"100%",width:"100%"}}>
        <Cities onClick={handleClick} />
        <div className="trying-to-center">
          <WeatherData lon={lon} lat={lat} apiKey={API_key}/>\
        </div>
      </div>
    </div>
  );
}

export default App;
