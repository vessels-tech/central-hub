'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Table } from 'semantic-ui-react';

const TransferRow = ({ transfer }) => (
  <Table.Row>
    <Table.Cell>
      <Link to={`/transfers/${transfer.id}`}>{transfer.id}</Link>
    </Table.Cell>
    <Table.Cell>{transfer.amount}</Table.Cell>
    <Table.Cell>
      <Link to={`/members/${transfer.credit_account_name}`}>{transfer.credit_account_name}</Link>
    </Table.Cell>
    <Table.Cell>
      <Link to={`/members/${transfer.debit_account_name}`}>{transfer.debit_account_name}</Link>
    </Table.Cell>
    <Table.Cell>{transfer.state}</Table.Cell>
    <Table.Cell>{transfer.timeline.prepared_at}</Table.Cell>
  </Table.Row>
)

export default TransferRow
