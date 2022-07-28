import React, { useState, useEffect } from 'react';
import City from "./city.js";

function Cities(props) {
    const citiesList = props.cities.map(city =>
            <li key={city}>
            <City name={city}/>
        </li>
    )
    return (
        <>
            <Button>{name}</Button>
        </>
    )
}

export default City;
