import React, { Component } from 'react';
import EarthquakeData from './EarthquakeData'
import EarthquakeContainer from './EarthquakeContainer';
import Mapcontainer from './MapContainer';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
          <Mapcontainer />
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
