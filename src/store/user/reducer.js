import {
  FEATCH_PERSON,
  FEATCH_PERSON_FAIL,
  FEATCH_PERSON_SUCCESS,
  FEATCH_PERSON_POSTS,
  FEATCH_PERSON_POSTS_FAIL,
  FEATCH_PERSON_POSTS_SUCCESS
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
    case FEATCH_PERSON_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: action.bool
        }
      };
    case FEATCH_PERSON_POSTS_FAIL:
      return {
        ...state,
        posts: {
          ...state.posts,
          error: action.bool
        }
      };
    case FEATCH_PERSON_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: action.posts
        }
      };
    default:
      return state;
  }
};

export default personReducer;
