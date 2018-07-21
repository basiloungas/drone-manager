import { combineReducers } from 'redux';

import droneReducer from './drones';

export default (extraReducers) => {
  return combineReducers({
    droneReducer,
    ...extraReducers,
  });
};
