'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Table } from 'semantic-ui-react';

const PositionRow = ({ position }) => (
  <Table.Row>
    <Table.Cell>{position.account}</Table.Cell>
    <Table.Cell>{position.net}</Table.Cell>
  </Table.Row>
)

export default PositionRow

