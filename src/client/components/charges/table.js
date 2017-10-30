'use strict'

import React from 'react';
import { Table } from 'semantic-ui-react';
import ChargeRow from './row';
import Pagination from './pagination';

const ChargesTable = ({ charges }) => (
  <Table striped sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="8" textAlign="right">
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Charge Type</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Payer</Table.HeaderCell>
        <Table.HeaderCell>Payee</Table.HeaderCell>
        <Table.HeaderCell>Rate</Table.HeaderCell>
        <Table.HeaderCell>Rate Type</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {charges.map((charge, i) => <ChargeRow key={i} charge={charge} />)}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="8">
          <Pagination />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);


export default ChargesTable;
