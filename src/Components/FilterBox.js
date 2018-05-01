import React, { Component } from 'react';
import { Input } from 'antd';
import './FilterBox.css';

const Search = Input.Search;
export default class FilterBox extends Component {
  render() {
    const { onClickFilter } = this.props;
    return (
      <div className="filter-box">
        <Search
          placeholder="input search text"
          onSearch={onClickFilter}
          enterButton
        />
      </div>
    )
  }
}
