'use strict'

import { connect } from 'react-redux'
import Members from '../components/members'
import { lookupMembers } from '../components/members/actionCreators'

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps, { lookupMembers })(Members)
