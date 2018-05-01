import React, { Component } from 'react';
import FilterBox from './FilterBox';
import ListLocations from './ListLocations';
import './SideBar.css';

export default class SideBar extends Component {
  render() {
    const { locations, onClickFilter, onClickList } = this.props;
    return (
      <div className="side-bar">
        <FilterBox onClickFilter={onClickFilter}/>
        <ListLocations locations={locations} onClickList={onClickList}/>
      </div>
    )
  }
}
