import { FETCH_LOCATION } from './actions';

const INITIAL_STATE = {
  latitude: -22.76582271125457, longitude: -43.43816981560644, loading: false,
};
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_LOCATION:
    return {
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    };
  default:
    return state;
  }
};

export default rootReducer;
