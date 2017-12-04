'use strict'

import React from 'react';
import { Table } from 'semantic-ui-react';
import PositionRow from './row';
import Pagination from './pagination';
import FilterButton from './filter';

const PositionsTable = ({ positions }) => (
  <Table striped sortable>
    <Table.Header>
    <Table.Row>
        <Table.HeaderCell colSpan="6" textAlign="right">
          <FilterButton />
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Account</Table.HeaderCell>
        <Table.HeaderCell>Net Position</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {positions.map((position, i) => <PositionRow key={i} position={position} />)}
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


export default PositionsTable;
