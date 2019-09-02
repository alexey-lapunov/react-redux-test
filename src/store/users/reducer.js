import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAIL,
  FETCH_PEOPLE_SUCCESS
} from './constants';

const DEFAULT_STATE = {
  entities: [],
  error: null,
  isFetching: false
};

const peopleReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        isFetching: action.bool
      };
    case FETCH_PEOPLE_FAIL:
      return {
        ...state,
        arror: action.text
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        entities: action.people
      };
    default:
      return state;
  }
};

export default peopleReducer;
