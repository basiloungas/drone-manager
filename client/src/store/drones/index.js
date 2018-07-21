import * as Actions from './actions';

export const initialState = {
  dronesById: {},
  list: new Set()
};

const reducer = (state, payload) => {
  const {
    dronesById,
    list,
  } = state;

  const newDronesById = {
    ...dronesById,
    [payload.id]: payload
  };

  let newList = list;
  if (!list.has(payload.id)) {
    newList = new Set(list);
    newList.add(payload.id);
  }

  return {
    ...state,
    dronesById: newDronesById,
    list: newList,
  };
}

const droneReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.HYDRATE_DRONE_DATA:
      const dronesList = action.payload.drones;

      return dronesList.reduce(reducer, state);

    case Actions.UPDATE_DRONE_DATA:
      return reducer(state, action.payload)

    default:
      return state
  }
}

export default droneReducer;