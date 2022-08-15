import React, { useState, useEffect } from 'react';
import './city.css';

function City({name, lon, lat, imglink, onClick}) {
    return (
        <>
          <button className="City" onClick={()=>{onClick(name, lon, lat, imglink)}}>{name}</button>
        </>
    )
}

export default City;
