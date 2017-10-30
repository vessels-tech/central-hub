'use strict'

import React from 'react';
import Table from './table';

const Members = ({ transfers }) => (
  <div className="transfers">
    <h1>Transfers</h1>
    <Table transfers={transfers} />
  </div>
)

export default Members;
