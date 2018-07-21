import { createSelector } from 'reselect';

const getList = state => state.droneReducer.list;
const getDrones = state => state.droneReducer.dronesById;

export const sortByUpdatedAt = (itemA, itemB) => {
  if (itemA.lastUpdatedAt < itemB.lastUpdatedAt) {
    return 1;
  }

  if (itemA.lastUpdatedAt > itemB.lastUpdatedAt) {
    return -1;
  }

  return 0;
}

const getPopulatedDronesList = createSelector(
  getList,
  getDrones,
  (list, drones) => {
    return Array.from(list)
      .map(droneId => drones[droneId])
      // TODO: maybe do that on the table?
      .sort(sortByUpdatedAt);
  },
);

export default getPopulatedDronesList;