import * as Actions from './actions';
import reducer, {initialState} from './index';

describe('store > drones -> reducer', () => {
  const drone1 = {id: 1};
  const drone2 = {id: 2};

  describe('on UPDATE_DRONE_DATA', () => {
    test('adds new drone on "dronesByID"', () => {
      const newState = reducer(initialState, Actions.updateDroneData(drone1));

      expect(newState.dronesById['1']).toEqual(drone1);
    });

    test('adds new drone in "list"', () => {
      const newState = reducer(initialState, Actions.updateDroneData(drone1));

      expect(newState.list).toEqual(new Set([1]));
    });

    test('adds multiple drones correctly', () => {
      let newState = reducer(initialState, Actions.updateDroneData(drone1));
      newState = reducer(newState, Actions.updateDroneData(drone2));

      expect(newState.dronesById['1']).toEqual(drone1);
      expect(newState.dronesById['2']).toEqual(drone2);
      expect(newState.list).toEqual(new Set([1, 2]));
    });
  });
});
