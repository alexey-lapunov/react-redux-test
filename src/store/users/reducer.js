import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAIL,
  FETCH_PEOPLE_SUCCESS
} from './constants';

const DEFAULT_STATE = {
  userList: [],
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
        arror: action.text
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        userList: action.users
      };
    default:
      return state;
  }
};

export default usersReducer;
