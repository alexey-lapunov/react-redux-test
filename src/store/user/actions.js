import * as C from './constants';

export const featchPerson = bool => {
  return {
    type: C.FEATCH_PERSON,
    bool
  };
};

export const featchPersonError = text => {
  return {
    type: C.FEATCH_PERSON_FAIL,
    text
  };
};

export const featchPersonSuccess = person => {
  return {
    type: C.FEATCH_PERSON_SUCCESS,
    person
  };
};

// ACTIONS USER POSTS
export const featchPersonPosts = bool => {
  return {
    type: C.FEATCH_PERSON_POSTS,
    bool
  };
};

export const featchPersonPostsError = text => {
  return {
    type: C.FEATCH_PERSON_POSTS_FAIL,
    text
  };
};

export const featchPersonPostsSuccess = posts => {
  return {
    type: C.FEATCH_PERSON_POSTS_SUCCESS,
    posts
  };
};

// ACTIONS USER POST
export const featchPersonPost = bool => {
  return {
    type: C.FEATCH_PERSON_POST,
    bool
  };
};

export const featchPersonPostError = bool => {
  return {
    type: C.FEATCH_PERSON_POST_FAIL,
    bool
  };
};

export const featchPersonPostSuccess = post => {
  return {
    type: C.FEATCH_PERSON_POST_SUCCESS,
    post
  };
};

// ACTIONS USER ALBUMS
export const featchPersonAlbums = bool => {
  return {
    type: C.FEATCH_PERSON_ALBUMS,
    bool
  };
};

export const featchPersonAlbumsError = bool => {
  return {
    type: C.FEATCH_PERSON_ALBUMS_FAIL,
    bool
  };
};

export const featchPersonAlbumsSuccess = albums => {
  return {
    type: C.FEATCH_PERSON_ALBUMS_SUCCESS,
    albums
  };
};

// ACTIONS ALBOM PHOTOS
export const featchAlbomPhotos = bool => {
  return {
    type: C.FEATCH_ALBUM_PHOTOS,
    bool
  };
};

export const featchAlbomPhotosError = bool => {
  return {
    type: C.FEATCH_ALBUM_PHOTOS_FAIL,
    bool
  };
};

export const featchAlbomPhotosSuccess = photos => {
  return {
    type: C.FEATCH_ALBUM_PHOTOS_SUCCESS,
    photos
  };
};

// ACTIONS PERSON TODOS
export const featchPersonTodos = bool => {
  return {
    type: C.FEATCH_PERSON_TODOS,
    bool
  };
};

export const featchPersonTodosError = bool => {
  return {
    type: C.FEATCH_PERSON_TODOS_FAIL,
    bool
  };
};

export const featchPersonTodosSuccess = todos => {
  return {
    type: C.FEATCH_PERSON_TODOS_SUCCESS,
    todos
  };
};
