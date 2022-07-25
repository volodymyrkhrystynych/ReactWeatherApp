import React, { Component } from 'react';

export default class WeatherData extends Component {
  componentDidMount() {
    // console.log('hello')
    this.getWeatherData();
    // const url = 'https://dark-sky.p.rapidapi.com/37.774929,-122.419418,2019-02-20';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'd31192c265mshe7589f784720465p1ae09djsn31af67b7d826',
    //     'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
    //   }
    // };
  }

  getWeatherData(){
    const lat = 37.774929
    const lon = -122.419418
    const API_key = 'fc38166d48d39f532d2ad0e8dde12273'

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        // this.setState({
        //   isLoaded: true,
        //   items: result.items
        // });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return(
      <p>Click on an emoji to view the emoji short name.</p>
    )
  }
}
