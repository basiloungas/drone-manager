import { updateDroneData } from '../../store/drones/actions';

const generateEventsList = store => {
  return {
    droneData: droneList => {
      droneList
        .forEach(drone => {
          store.dispatch( new updateDroneData(drone))
        });
    }
  }
};

export default generateEventsList;