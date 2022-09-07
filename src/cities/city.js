import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import './city.css';

function City({name, lon, lat, imglink, onClick}) {
    return (
        <>
          <Button variant="contained" className="City" onClick={()=>{onClick(name, lon, lat, imglink)}}>{name}</Button>
        </>
    )
}

export default City;
