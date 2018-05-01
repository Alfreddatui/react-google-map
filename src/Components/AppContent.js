import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import MapComponent from './MapComponent';
import SideBar from './SideBar';
import './AppContent.css';

const google = window.google; // Add this if you are using create-react-app

export default class AppContent extends Component {
  state = {
    query: '',
    locations: [
      {title: 'Clifton Park', location: { lat: 40.77053542333671, lng: -73.99463296149743 }, infoWindowOpen: false, bounce: google.maps.Animation.DROP, data: null},
      {title: 'Kayaking on the Hudson', location: { lat: 40.771270433767896, lng: -73.99567511119804 }, infoWindowOpen: false, bounce: google.maps.Animation.DROP, data: null},
      {title: 'Pier 96 Boathouse', location: { lat: 40.77102558152741, lng: -73.99551673438022 }, infoWindowOpen: false, bounce: google.maps.Animation.DROP, data: null},
      {title: 'Pier 95 Park', location: { lat: 40.77102476744335, lng: -73.99504615452122 }, infoWindowOpen: false, bounce: google.maps.Animation.DROP, data: null},
      {title: 'Clinton Cove Park', location: { lat: 40.770076798849246, lng: -73.99567741992115 }, infoWindowOpen: false, bounce: google.maps.Animation.DROP, data: null},
      {title: 'Manhattan Kayak + SUP', location: { lat: 40.7706157437236, lng: -73.99475921501585 }, infoWindowOpen: false, bounce: google.maps.Animation.DROP, data: null},
    ],
  }

  onClickFilter = (e) => {
    this.setState({ query: e.trim() })
  }
  
  onClickList = (e) => {
    const value = e.target.innerHTML;
    let clickedIndex;
    let result = [...this.state.locations];
    result.forEach((location, index) => {
      if (location.title === value) {
        clickedIndex = index;
      }
    })
    result[clickedIndex].infoWindowOpen = !result[clickedIndex].infoWindowOpen;
    if (!result[clickedIndex].data) {
      fetch(`https://api.foursquare.com/v2/venues/search?client_id=PFRSHOARSKKQLDCMFJRNLGPO1GEOAJRSQQL3IKI23PETZ3NG&client_secret=SOGB03BQYTWBBC2YSF4MGM3JC4AQ2C51SUQE0VJTNQHOFHAI&ll=${result[clickedIndex].location.lat},${result[clickedIndex].location.lng}&v=20180501`)
      .then(response => response.json())
      .then(response => {
        result[clickedIndex].data = response.response.venues[0];
        this.setState({
          locations: result,
        })
      })
    } else {
      this.setState({
        locations: result,
      })
    }
  }

  onToggleOpen = (index) => {
    let result = [...this.state.locations];
    result[index].infoWindowOpen = !result[index].infoWindowOpen;
    if (!result[index].data) {
      fetch(`https://api.foursquare.com/v2/venues/search?client_id=PFRSHOARSKKQLDCMFJRNLGPO1GEOAJRSQQL3IKI23PETZ3NG&client_secret=SOGB03BQYTWBBC2YSF4MGM3JC4AQ2C51SUQE0VJTNQHOFHAI&ll=${result[index].location.lat},${result[index].location.lng}&v=20180501`)
      .then(response => response.json())
      .then(response => {
        result[index].data = response.response.venues[0];
        this.setState({
          locations: result,
        })
      })
    } else {
      this.setState({
        locations: result,
      })
    }
  }

  render() {
    const { query, locations } = this.state;
    let filteredMarker
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      filteredMarker = locations.filter(location => match.test(location.title))
    } else {
      filteredMarker = locations;
    }

    filteredMarker.sort(sortBy('title'))
    const { collapsed } = this.props;
    return (
      <div className="app-content">
        {collapsed && 
          <SideBar locations={filteredMarker} onClickFilter={this.onClickFilter} onClickList={this.onClickList}/>
        }
        <MapComponent
          locations={filteredMarker}
          onToggleOpen={this.onToggleOpen}
        />
      </div>
    )
  }
}
