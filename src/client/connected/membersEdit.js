'use strict';

import { connect } from 'react-redux';
import Edit from '../components/members/edit';
import { editMember, lookupMember } from '../components/members/actionCreators'

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, { editMember, lookupMember })(Edit);
