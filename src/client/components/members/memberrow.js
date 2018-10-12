'use strict'

import React from 'react'
import { Table } from 'semantic-ui-react'

const MemberRow = ({ member }) => (
  <Table.Row>
    <Table.Cell><a href={`/members/${member.name}/edit`}>{member.name}</a></Table.Cell>
    <Table.Cell>{member.created}</Table.Cell>
    <Table.Cell>{member.is_disabled ? 'true' : 'false'}</Table.Cell>
  </Table.Row>
)

export default MemberRow
