'use strict';

import { connect } from 'react-redux';
import Charges from '../components/charges';
import { lookupCharges } from '../components/charges/actionCreators'

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, { lookupCharges })(Charges);
