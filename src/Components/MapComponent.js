import React, { Component } from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import MarkerComponent from './MarkerComponent.js';
import './MapComponent.css';

class MapComponent extends Component {
  render() {
    const { locations, onToggleOpen } = this.props;
    return (
      <div>
        <GoogleMap
          defaultZoom={19}
          defaultCenter={{ lat: 40.770633549, lng: -73.99526244 }}
        >
          {
            locations.map((location, index) => {
              return <MarkerComponent key={index} location={location} onToggleOpen={onToggleOpen} index={index}/>
            })
          }
        </GoogleMap>
      </div>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYr0Xm_CAIJ2FfdTsv0NbPgafCpvs9bq0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map-component"/>,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  // withScriptjs,
  withGoogleMap,
)(MapComponent);