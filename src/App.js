import React, { Component } from 'react';
import EarthquakeData from './EarthquakeData'

class App extends Component {
  constructor(){
    super();


  }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <EarthquakeData />
        </div>
      </div>
    );
  }
}

export default App;
