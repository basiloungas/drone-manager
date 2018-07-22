import { createSelector } from 'reselect';

const getList = state => state.droneReducer.list;
const getDrones = state => state.droneReducer.dronesById;

const getPopulatedDronesList = createSelector(
  getList,
  getDrones,
  (list, drones) => Array.from(list).map(droneId => drones[droneId]),
);

export default getPopulatedDronesList;