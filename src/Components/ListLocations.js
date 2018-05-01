import React, { Component } from 'react';
import Location from './Location';
import './ListLocations.css';

export default class ListLocations extends Component {
  render() {
    const { locations, onClickList } = this.props;
    return (
      <div className="list-locations">
        <ul>
          {locations.map((location, index) => {
            return <Location key={index} location={location} onClickList={onClickList}/>
          })}
        </ul>
      </div>
    )
  }
}
