import * as C from './constants';

const DEFAUTL_STATE = {
  postsList: {
    data: [],
    isFetching: false,
    error: null
  },
  activePost: {
    data: null,
    isFetching: false,
    error: null
  }
};

const postsReducer = (state = DEFAUTL_STATE, action) => {
  switch (action.type) {
    case C.FEATCH_POSTS:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          isFetching: action.bool
        }
      };
    case C.FEATCH_POSTS_ERROR:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          error: action.error
        }
      };
    case C.FEATCH_POSTS_SUCCESS:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          data: action.data
        }
      };
    case C.FEATCH_POST:
      return {
        ...state,
        activePost: {
          ...state.activePost,
          isFetching: action.bool
        }
      };
    case C.FEATCH_POST_ERROR:
      return {
        ...state,
        activePost: {
          ...state.activePost,
          isFetching: action.bool
        }
      };
    case C.FEATCH_POST_SUCCESS:
      return {
        ...state,
        activePost: {
          ...state.activePost,
          data: action.data
        }
      };
    default:
      return state;
  }
};

export default postsReducer;
