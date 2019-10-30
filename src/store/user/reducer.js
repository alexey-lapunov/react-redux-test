import * as C from './constants';

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
  },
  photos: {
    data: [],
    isFetching: false,
    error: null
  },
  todos: {
    data: [],
    isFetching: false,
    error: null
  }
};

const personReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case C.FEATCH_PERSON:
      return {
        ...state,
        person: {
          ...state.person,
          isFetching: action.bool
        }
      };
    case C.FEATCH_PERSON_FAIL:
      return {
        ...state,
        person: {
          ...state.person,
          error: action.bool
        }
      };
    case C.FEATCH_PERSON_SUCCESS:
      return {
        ...state,
        person: {
          ...state.person,
          data: action.person
        }
      };
    case C.FEATCH_PERSON_POSTS:
      return {
        ...state,
        posts: {
          ...state.posts,
          isFetching: action.bool
        }
      };
    case C.FEATCH_PERSON_POSTS_FAIL:
      return {
        ...state,
        posts: {
          ...state.posts,
          error: action.bool
        }
      };
    case C.FEATCH_PERSON_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: action.posts
        }
      };
    case C.FEATCH_PERSON_POST:
      return {
        ...state,
        post: {
          ...state.post,
          isFetching: action.bool
        }
      };
    case C.FEATCH_PERSON_POST_FAIL:
      return {
        ...state,
        post: {
          ...state.post,
          error: action.bool
        }
      };
    case C.FEATCH_PERSON_POST_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          data: action.post
        }
      };
    case C.FEATCH_PERSON_ALBUMS:
      return {
        ...state,
        photoAlbums: {
          ...state.photoAlbums,
          isFetching: action.bool
        }
      };
    case C.FEATCH_PERSON_ALBUMS_FAIL:
      return {
        ...state,
        photoAlbums: {
          ...state.photoAlbums,
          error: action.bool
        }
      };
    case C.FEATCH_PERSON_ALBUMS_SUCCESS:
      return {
        ...state,
        photoAlbums: {
          ...state.photoAlbums,
          data: action.albums
        }
      };
    case C.FEATCH_ALBUM_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          isFetching: action.bool
        }
      };
    case C.FEATCH_ALBUM_PHOTOS_FAIL:
      return {
        ...state,
        photos: {
          ...state.photos,
          error: action.bool
        }
      };
    case C.FEATCH_ALBUM_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          data: action.photos
        }
      };
    case C.FEATCH_PERSON_TODOS:
      return {
        ...state,
        todos: {
          ...state.todos,
          isFetching: action.bool
        }
      };
    case C.FEATCH_PERSON_TODOS_FAIL:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: action.bool
        }
      };
    case C.FEATCH_PERSON_TODOS_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          data: action.todos
        }
      };
    default:
      return state;
  }
};

export default personReducer;
