import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

export default class Container extends Component {
  state = {
    collapsed: true,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <div style={{ margin: 0, padding: 0, height: '100%' }}>
        <AppHeader collapsed={collapsed} toggleCollapsed={this.toggleCollapsed}/>
        <AppContent collapsed={collapsed}/>
      </div>
    )
  }
}
