import React, { Component } from 'react';


class EarthquakeData extends Component {
constructor(){
  super();

  this.state = {
    earthquakeData: []
  }

}

getEarthquakeData = async () => {
  try {

    const earthquake = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');

    const earthquakeJson = await earthquake.json();
    await this.state.earthquakeData.push(earthquakeJson);
    return earthquakeJson;

  } catch(err) {
    return err;
  }
};
componentDidMount() {

    this.getEarthquakeData().then((earthquake) => {
      console.log(earthquake, ' this is data');

      this.setState({earthquakeData: earthquake})
      console.log(this.state.earthquakeData, 'STATE DATA CURRENT');

    }).catch((err) => {
      console.log(err)
    })
  }


render(){
  return(
    <div>

      <h1>HELLOOO</h1>
    </div>
  );
}

}

export default EarthquakeData;
