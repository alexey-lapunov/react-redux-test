import * as C from './constants';

const DEFAULT_STATE = {
  people: [],
  error: null,
  isFetching: false
};

const usersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case C.FETCH_PEOPLE:
      return {
        ...state,
        isFetching: action.bool
      };
    case C.FETCH_PEOPLE_FAIL:
      return {
        ...state,
        error: action.text
      };
    case C.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.people
      };
    default:
      return state;
  }
};

export default usersReducer;
