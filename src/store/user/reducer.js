import {
  FEATCH_PERSON,
  FEATCH_PERSON_FAIL,
  FEATCH_PERSON_SUCCESS,
  FEATCH_PERSON_POSTS,
  FEATCH_PERSON_POSTS_FAIL,
  FEATCH_PERSON_POSTS_SUCCESS,
  FEATCH_PERSON_POST,
  FEATCH_PERSON_POST_FAIL,
  FEATCH_PERSON_POST_SUCCESS,
  FEATCH_PERSON_ALBUMS,
  FEATCH_PERSON_ALBUMS_FAIL,
  FEATCH_PERSON_ALBUMS_SUCCESS
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
  },
  post: {
    data: {},
    isFetching: false,
    error: null
  },
  photoAlbums: {
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
    case FEATCH_PERSON_POST:
      return {
        ...state,
        post: {
          ...state.post,
          isFetching: action.bool
        }
      };
    case FEATCH_PERSON_POST_FAIL:
      return {
        ...state,
        post: {
          ...state.post,
          error: action.bool
        }
      };
    case FEATCH_PERSON_POST_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          data: action.post
        }
      };
    case FEATCH_PERSON_ALBUMS:
      return {
        ...state,
        photoAlbums: {
          ...state.photoAlbums,
          isFetching: action.bool
        }
      };
    case FEATCH_PERSON_ALBUMS_FAIL:
      return {
        ...state,
        photoAlbums: {
          ...state.photoAlbums,
          error: action.bool
        }
      };
    case FEATCH_PERSON_ALBUMS_SUCCESS:
      return {
        ...state,
        photoAlbums: {
          ...state.photoAlbums,
          data: action.albums
        }
      };
    default:
      return state;
  }
};

export default personReducer;
