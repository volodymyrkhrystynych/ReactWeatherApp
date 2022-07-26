import React from 'react';
import './Location.css';

function Location(props) {
  return(
    <div className="Location">
      <div className="row">
        <label>Lat</label>
        <input value={props.lat} onChange={(event) => props.setLat(event.target.value)}/>
      </div>
      <div className="row">
        <label>Lon</label>
        <input value={props.lon} onChange={(event) => props.setLon(event.target.value)}/>
      </div>
    </div>
  )
}

export default Location