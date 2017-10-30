'use strict';

import React from 'react';
import { Table } from 'semantic-ui-react';
import CreateButton from './create-button';
import MemberRow from './memberrow';
import MemberPagination from './pagination';

const MemberTable = ({ members }) => (
  <Table striped sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="3" textAlign="right">
          <CreateButton />
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Created</Table.HeaderCell>
        <Table.HeaderCell>Disabled</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {members.map((member, i) => <MemberRow key={i} member={member} />)}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="3">
          <MemberPagination />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);


export default MemberTable;
