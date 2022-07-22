import React, { Component } from 'react';

export class WeatherData extends Component {
     fetch = require('node-fetch');

     url = 'https://dark-sky.p.rapidapi.com/37.774929,-122.419418,2019-02-20';

     options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
        }
    };

    fetch(url, options)
	      .then(res => res.json())

  render() {
    return(
      <p>Click on an emoji to view the emoji short name.</p>
    )
  }

}
