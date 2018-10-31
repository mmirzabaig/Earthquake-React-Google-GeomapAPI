import React, { Component } from 'react';

class EarthquakeContainer extends Component {

  render(){
    console.log(this.props.earthquakeDataPassed, "HELLLO");

    const dataReceived = this.props.earthquakeDataPassed.map((data, i) => {

      return (

        <li key={i}>
          Key: {i} <br/>
          Title: {data.properties.title} <br/>
          Coordinates: {data.geometry.coordinates} <br/> <br/> <br/>
        </li>
      );
    });


    return (
      <div>

        <h1>Hello</h1>
        <ul>
          {dataReceived}
        </ul>
      </div>
    );

  }

}

export default EarthquakeContainer;
