import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAIL,
  FETCH_PEOPLE_SUCCESS
} from './constants';

const DEFAULT_STATE = {
  people: [],
  error: null,
  isFetching: false
};

const usersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        isFetching: action.bool
      };
    case FETCH_PEOPLE_FAIL:
      return {
        ...state,
        error: action.text
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.people
      };
    default:
      return state;
  }
};

export default usersReducer;
