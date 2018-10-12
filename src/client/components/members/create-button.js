'use strict'

import React from 'react'
import { Button } from 'semantic-ui-react'

const CreateButton = () => (
  <a href='/members/create'>
    <Button content='Create Member' icon='add user' primary />
  </a>
)

export default CreateButton
