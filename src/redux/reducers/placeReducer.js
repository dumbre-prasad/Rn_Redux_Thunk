import {ADD_PLACE, DELETE_PLACE} from '../actions/types';
const initialState = {
  places: [],
};
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(({key}) => action.payload !== key),
      };
    default:
      return state;
  }
};
export default placeReducer;
