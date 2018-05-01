import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import './AppHeader.css';

export default class Container extends Component {
  render() {
    return (
      <div className="app-header">
        <Button type="primary" onClick={this.props.toggleCollapsed} style={{ marginBottom: 16, marginLeft: 16, marginTop: 8 }}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </div>
    )
  }
}
