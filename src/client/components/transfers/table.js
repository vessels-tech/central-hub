'use strict'

import React from 'react';
import { Table } from 'semantic-ui-react';
import TransferRow from './row';
import Pagination from './pagination';
import FilterButton from './filter';

const TransfersTable = ({ transfers }) => (
  <Table striped sortable>
    <Table.Header>
    <Table.Row>
        <Table.HeaderCell colSpan="6" textAlign="right">
          <FilterButton />
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Credit Account</Table.HeaderCell>
        <Table.HeaderCell>Debit Account</Table.HeaderCell>
        <Table.HeaderCell>State</Table.HeaderCell>
        <Table.HeaderCell>Prepared</Table.HeaderCell>
        <Table.HeaderCell>Executed</Table.HeaderCell>
        <Table.HeaderCell>Rejected</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {transfers.map((transfer, i) => <TransferRow key={i} transfer={transfer} />)}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="6">
          <Pagination />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);


export default TransfersTable;
