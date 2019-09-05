import {
  FEATCH_USER,
  FEATCH_USER_ERROR,
  FEATCH_USER_SUCCESS
} from './constants';

const DEFAULT_STATE = {
  person: {},
  isFetching: false,
  error: null
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FEATCH_USER:
      return {
        ...state,
        isFetching: action.bool
      };
    case FEATCH_USER_ERROR:
      return {
        ...state,
        error: action.bool
      };
    case FEATCH_USER_SUCCESS:
      return {
        ...state,
        person: action.user
      };
    default:
      return state;
  }
};

export default userReducer;
