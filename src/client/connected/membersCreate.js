'use strict'

import { connect } from 'react-redux'
import Create from '../components/members/create'
import { createMember } from '../components/members/actionCreators'

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps, { createMember })(Create)
