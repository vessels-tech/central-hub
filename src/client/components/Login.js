import React from 'react'
import { Form, Segment, Input, Button } from 'semantic-ui-react'

import './login.scss'

const Login = () => {
  return (
    <Form size='large'>
      <Segment stacked>
        <Form.Field>
          <Input icon='users' iconPosition='left' placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <Input icon='lock' iconPosition='left' placeholder='Password' />
        </Form.Field>
        <Button fluid size='large'>
          Login
        </Button>
      </Segment>
    </Form>
  )
}

export default Login
