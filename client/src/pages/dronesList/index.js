import { connect } from 'react-redux'
import {compose} from 'recompose';

import Component from './component';
import getPopulatedDronesList from '../../store/drones/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    list: getPopulatedDronesList(state)
  }
}

export default compose(
  connect(mapStateToProps),
)(Component);