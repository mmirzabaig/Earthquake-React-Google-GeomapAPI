import React, { Component } from 'react';
import EarthquakeContainer from '../EarthquakeContainer';

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
    return earthquakeJson;

  } catch(err) {
    return err;
  }
};
componentDidMount() {

    this.getEarthquakeData().then((earthquake) => {

      this.setState({earthquakeData: earthquake.features})
      // console.log(this.state.earthquakeData, 'STATE DATA CURRENT');

    }).catch((err) => {
      console.log(err)
    })
  }


render(){
  return(
    <div>

      <h1>HELLOOO</h1>
      <EarthquakeContainer earthquakeDataPassed={this.state.earthquakeData} />
    </div>
  );
}

}

export default EarthquakeData;
