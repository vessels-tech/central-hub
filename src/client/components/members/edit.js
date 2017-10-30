'use strict'

import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import './edit.scss';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIsDisabledChange = this.handleIsDisabledChange.bind(this);
    this.displayMessageBox = this.displayMessageBox.bind(this);
    this.name = props.params.id;
  }

  componentDidMount() {
    this.props.lookupMember({ name: this.name });
  }

  handleSubmit(event) {
    event.preventDefault();
    const editMember = {
      name: this.name,
      isDisabled: this.isDisabled
    }
    this.props.editMember(editMember);
  }

  handleIsDisabledChange(event, data) {
    this.isDisabled = data.checked;
  }

  displayMessageBox() {
    if (this.props.flags.membersCreateActive)
      return (<Message>Request to create Member [{this.props.create.member.name}] in process.</Message>);
    if (this.props.create.member && !this.props.create.error && !this.props.flags.membersCreateActive)
      return (<Message positive={true}>Member [{this.props.create.member.name}] created.</Message>);
    if (this.props.create.member && this.props.create.error && !this.props.flags.membersCreateActive)
      return (<Message negative={true}>Member [{this.props.create.member.name}] NOT created. Error: {this.props.create.error}</Message>);
  }

  displayCheckbox() {
    if (this.isDisabled !== undefined) {
      return (<Form.Checkbox label='Disabled' onChange={this.handleIsDisabledChange} defaultChecked={this.isDisabled} />);
    }
  }

  render() {
    const { members, flags } = this.props;
    if (members[0] !== undefined) {
      this.isDisabled = members[0].is_disabled;
    }
    return (
      <div>
        <h1>Edit Member</h1>
        <br></br>
        <div className='edit-modal'>
          <div className='edit-modal-header'>
            <h1>{this.name}</h1>
          </div>
          <Form className='edit-form' onSubmit={this.handleSubmit}>
            {this.displayCheckbox()}
            <Form.Button primary>Submit</Form.Button>
          </Form>
          <a href='/members'>Cancel</a>
        </div>
        {this.displayMessageBox()}
      </div>
    );
  }
}

export default Edit;
