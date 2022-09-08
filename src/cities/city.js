import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import './city.css';

function City({name, lon, lat, imglink, onClick}) {
    return (
        <div className="City">
          <Button variant="contained" onClick={()=>{onClick(name, lon, lat, imglink)}}>{name}</Button>
        </div>
    )
}

export default City;
