'use strict';

import { connect } from 'react-redux';
import Transfers from '../components/transfers';
import { retrieveTransfers } from '../components/transfers/actionCreators'

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, { retrieveTransfers })(Transfers);