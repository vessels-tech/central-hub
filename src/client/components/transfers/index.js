'use strict'

import React, { Component } from 'react';
import TransfersTable from './table';
import 'isomorphic-fetch'
const ReactDOM = require('react-dom');

class Transfers extends Component {

  constructor() {
    super();
    this.state = { transfers: [] };
  }

  componentDidMount() {
    fetch("/api/transfers", { method: 'get' })
    .then(response => {
      response.json().then(json => {this.setState({transfers:json});})
    });
  }

  render() {
    return (
      <div className="transfers">
        <h1>Transfers</h1>
        <TransfersTable transfers={this.state.transfers} />
      </div>
    )
  }

}


export default Transfers;
