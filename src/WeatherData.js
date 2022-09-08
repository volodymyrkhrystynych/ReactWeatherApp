import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

function WeatherData(props) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(undefined)
  const [result, setResult] = useState({})

  useEffect(()=> {
    getWeatherData(props.lat, props.lon, props.apiKey);
  }, [props.lat, props.lon, props.apiKey])

  const getWeatherData = (lat, lon, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
    .then(res => {
      if (res.status >= 400){
        throw new Error("server responds with error!");
      }
      return res.json();
    })
    .then(
      (result) => {
        setIsLoaded(true);
        setResult(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }


  if(!isLoaded){
    return(
      <div className='loading'>
        loading           loading           loading           loading           loading           loading 
      </div>
    )
  }

  if(error){
    return(
      <div className='error'>
        Error
      </div>
    )
  }

  console.log(result)

  return(
    <Card style={{opacity:0.7, paddingLeft:50, paddingRight:50}}>
      <h1> { (result.main?.temp - 272.15).toFixed(1)}&#176;</h1>
    </Card>  
  )
}

export default WeatherData;
