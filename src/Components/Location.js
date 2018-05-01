import React, { Component } from 'react';
import './Location.css';

export default class Location extends Component {
  render() {
    const { location, onClickList } = this.props;
    return (
      <li className="one-location" onClick={onClickList} value="asdasd">
        {location.title}
      </li>
    )
  }
}
