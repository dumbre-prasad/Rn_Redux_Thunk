import {ADD_PLACE, DELETE_PLACE} from './types';
import {useDispatch} from 'react-redux';

export const usePlace = () => {
  const dispatch = useDispatch();

  const deletePlace = key => {
    dispatch({
      type: DELETE_PLACE,
      payload: key,
    });
  };

  const addPlace = placeName => {
    dispatch({
      type: ADD_PLACE,
      payload: placeName,
    });
  };

  return {
    addPlace,
    deletePlace,
  };
};
