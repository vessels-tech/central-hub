'use strict'

import React, { Component } from 'react';
import ChargeTable from './table';

class Charges extends Component {

  componentDidMount() {
    this.props.lookupCharges();
  }

  render() {
    const { charges } = this.props;
    return (
      <div className="charges">
        <h1>Charges</h1>
        <ChargeTable charges={charges} />
      </div>
    )
  }

}

export default Charges;
