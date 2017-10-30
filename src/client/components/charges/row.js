'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Table } from 'semantic-ui-react';

const ChargeRow = ({ charge }) => (
  <Table.Row>
    <Table.Cell>{charge.id}</Table.Cell>
    <Table.Cell>{charge.name}</Table.Cell>
    <Table.Cell>{charge.charge_type}</Table.Cell>
    <Table.Cell>{charge.payer}</Table.Cell>
    <Table.Cell>{charge.payee}</Table.Cell>
    <Table.Cell>{charge.rate_type}</Table.Cell>
    <Table.Cell>{charge.rate}</Table.Cell>
  </Table.Row>
)

export default ChargeRow
