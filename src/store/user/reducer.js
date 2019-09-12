import {
  FEATCH_PERSON,
  FEATCH_PERSON_FAIL,
  FEATCH_PERSON_SUCCESS
} from './constants';

const DEFAULT_STATE = {
  person: {
    data: {},
    isFetching: false,
    error: null
  },
  posts: {
    data: [],
    isFetching: false,
    error: null
  }
};

const personReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FEATCH_PERSON:
      return {
        ...state,
        person: {
          ...state.person,
          isFetching: action.bool
        }
      };
    case FEATCH_PERSON_FAIL:
      return {
        ...state,
        person: {
          ...state.person,
          error: action.bool
        }
      };
    case FEATCH_PERSON_SUCCESS:
      return {
        ...state,
        person: {
          ...state.person,
          data: action.person
        }
      };
    default:
      return state;
  }
};

export default personReducer;
