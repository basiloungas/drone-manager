
export const HYDRATE_DRONE_DATA = 'HYDRATE_DRONE_DATA';
export const hydrateDroneData = payload => ({
  type: HYDRATE_DRONE_DATA,
  payload,
});

export const UPDATE_DRONE_DATA = 'UPDATE_DRONE_DATA';
export const updateDroneData = payload => ({
  type: UPDATE_DRONE_DATA,
  payload,
});