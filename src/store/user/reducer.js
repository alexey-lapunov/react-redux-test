import {
  FEATCH_PERSON,
  FEATCH_PERSON_FAIL,
  FEATCH_PERSON_SUCCESS
} from './constants';

const DEFAULT_STATE = {
  person: {},
  isFetching: false,
  error: null
};

const personReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FEATCH_PERSON:
      return {
        ...state,
        isFetching: action.bool
      };
    case FEATCH_PERSON_FAIL:
      return {
        ...state,
        error: action.bool
      };
    case FEATCH_PERSON_SUCCESS:
      return {
        ...state,
        person: action.person
      };
    default:
      return state;
  }
};

export default personReducer;
