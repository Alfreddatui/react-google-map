import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import './MarkerComponent.css';

export default class Location extends Component {
  state = {
    link: null,
    open: null,
    rating: null,
    phone: null,
    review_count: null,
  }
  render() {
    const { location, onToggleOpen, index } = this.props;
    const position = location.location;
    const data = location.data;
    const { infoWindowOpen, bounce } = location;
    return (
      <Marker
        position={position}
        onClick={() => onToggleOpen(index)}
        animation={ bounce }
      >
        {infoWindowOpen &&
          <InfoWindow onCloseClick={() => onToggleOpen(index)}>
            <div className="info-window-text">
              <a href={location.link} target="_blank">{location.title}</a>
              <p>{`lat: ${position.lat}, lng: ${position.lng}`}</p>
              <p><strong>Address:</strong> { data ? data.location.address : ''}</p>
              <p><strong>Postal Code:</strong> { data ? data.location.postalCode : ''}</p>
            </div>
          </InfoWindow>
        }
      </Marker>
    )
  }
}
