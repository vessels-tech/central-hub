'use strict'

import React, { Component } from 'react';
import PositionsTable from './table';
import 'isomorphic-fetch'
const ReactDOM = require('react-dom');

class Positions extends Component {

  constructor() {
    super();
    this.state = { positions: [] };
  }

  componentDidMount() {
    fetch("/api/positions", { method: 'get'})
    .then(response => {
      response.json().then(json => {this.setState({positions:json.positions});})
    });
  }

  render() {
    console.log("pos1:",this.state.positions)
    return (
      <div className="positions">
        <h1>Positions</h1>
        <PositionsTable positions={this.state.positions} />
      </div>
    )
  }

}


export default Positions;
