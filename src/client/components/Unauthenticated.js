import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

class Unauthenticated extends React.Component {
  render () {
    return (<Grid verticalAlign='middle' textAlign='center'>
      <Grid.Column>
        {this.props.children}
      </Grid.Column>
    </Grid>)
  }

  componentDidMount () {
    document.body.classList.add('unauthenticated')
  }
}

export default Unauthenticated
