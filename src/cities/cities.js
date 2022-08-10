import React, { useState, useEffect } from 'react';
import City from "./city.js";

function Cities({onClick}) {
    const data = [
        {
            Name :'London',
            Latitude: 51.509,
            Longitude: -0.118
        },
        {
            Name: "New York",
            Latitude: 40.730,
            Longitude: -73.935
        },
        {
            Name: "Tokyo",
            Latitude: 35.652,
            Longitude: 139.839
        }
    ];
    
    const citiesList = data.map(city =>
        <li key={city.Name}>
            <City name={city.Name} lon={city.Longitude} lat={city.Latitude} onClick={onClick}/>
        </li>
    )
    return (
        <ul>
            {citiesList}
        </ul>
    )
}

export default Cities;
