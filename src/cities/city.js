import React, { useState, useEffect } from 'react';
import './city.css';

function City({name, lon, lat, onClick}) {
    return (
        <>
            <button className="City" onClick={()=>{onClick(name, lon, lat)}}>{name}</button>
        </>
    )
}

export default City;
