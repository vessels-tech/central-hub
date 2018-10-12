'use strict'

import React, { Component } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import './create.scss'

class Create extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.displayMessageBox = this.displayMessageBox.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const newMember = {
      name: this.name,
      password: this.password
    }
    this.props.createMember(newMember)
  }

  handleNameChange (event) {
    this.name = event.target.value
  }

  handlePasswordChange (event) {
    this.password = event.target.value
  }

  displayMessageBox () {
    if (this.props.flags.membersCreateActive) { return (<Message>Request to create Member [{this.props.create.member.name}] in process.</Message>) }
    if (this.props.create.member && !this.props.create.error && !this.props.flags.membersCreateActive) { return (<Message positive>Member [{this.props.create.member.name}] created.</Message>) }
    if (this.props.create.member && this.props.create.error && !this.props.flags.membersCreateActive) { return (<Message negative>Member [{this.props.create.member.name}] NOT created. Error: {this.props.create.error}</Message>) }
  }

  render () {
    return (
      <div>
        <h1>Create Member</h1>
        <Form className='create-form' onSubmit={this.handleSubmit}>
          <Form.Input label='Name' onChange={this.handleNameChange} />
          <Form.Input label='Password' onChange={this.handlePasswordChange} />
          <Form.Button primary>Submit</Form.Button>
        </Form>
        <a href='/members'>Cancel</a>
        {this.displayMessageBox()}
      </div>
    )
  }
}

export default Create
