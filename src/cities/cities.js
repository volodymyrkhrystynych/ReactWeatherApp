import React, { useState, useEffect } from 'react';
import City from "./city.js";

function Cities({onClick}) {
    const data = [
        {
            Name :'London',
            Latitude: 51.509,
            Longitude: -0.118,
            Img: './cities/london.jpg'
        },
        {
            Name: "New York",
            Latitude: 40.730,
            Longitude: -73.935,
            Img: './cities/nyc.jpg'
        },
        {
            Name: "Tokyo",
            Latitude: 35.652,
            Longitude: 139.839,
            Img: './cities/tokyo.jpg'
        }
    ];
    
    const citiesList = data.map(city =>
        <li key={city.Name}>
          <City name={city.Name} lon={city.Longitude} lat={city.Latitude} imglink={city.Img} onClick={onClick}/>
        </li>
    )
    return (
        <ul>
            {citiesList}
        </ul>
    )
}

export default Cities;
