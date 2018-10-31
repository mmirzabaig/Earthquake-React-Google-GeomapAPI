import React, { Component } from 'react';


class EarthquakeData extends Component {
constructor(){
  super();

  this.state = {
    earthquakeData: []
  }

}

getEarthquakedata = async () => {

  const earthquake = fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');

  const earthquakeJson = earthquake.json();
  console.log(earthquakeJson);
};


render(){
  return(
    <h1>HELLOOO</h1>
  );
}

}

export default EarthquakeData;
