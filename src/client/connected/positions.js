'use strict';

import { connect } from 'react-redux';
import Positions from '../components/positions';
import { retrievePositions } from '../components/positions/actionCreators'

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps, { retrievePositions })(Positions);