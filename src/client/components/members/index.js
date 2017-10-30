'use strict'

import React, { Component } from 'react';
import MemberTable from './memberstable';

class Members extends Component {

  componentDidMount() {
    this.props.lookupMembers();
  }

  render() {
    const { members } = this.props;
    return (
      <div className="members">
        <h1>Members</h1>
        <MemberTable members={members} />
      </div>
    )
  }

}

export default Members;
