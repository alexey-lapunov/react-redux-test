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
  FEATCH_PERSON_ALBUMS_SUCCESS,
  FEATCH_ALBUM_PHOTOS,
  FEATCH_ALBUM_PHOTOS_FAIL,
  FEATCH_ALBUM_PHOTOS_SUCCESS
} from './constants';

export const featchPerson = bool => {
  return {
    type: FEATCH_PERSON,
    bool
  };
};

export const featchPersonError = text => {
  return {
    type: FEATCH_PERSON_FAIL,
    text
  };
};

export const featchPersonSuccess = person => {
  return {
    type: FEATCH_PERSON_SUCCESS,
    person
  };
};

// ACTIONS USER POSTS
export const featchPersonPosts = bool => {
  return {
    type: FEATCH_PERSON_POSTS,
    bool
  };
};

export const featchPersonPostsError = text => {
  return {
    type: FEATCH_PERSON_POSTS_FAIL,
    text
  };
};

export const featchPersonPostsSuccess = posts => {
  return {
    type: FEATCH_PERSON_POSTS_SUCCESS,
    posts
  };
};

// ACTIONS USER POST
export const featchPersonPost = bool => {
  return {
    type: FEATCH_PERSON_POST,
    bool
  };
};

export const featchPersonPostError = bool => {
  return {
    type: FEATCH_PERSON_POST_FAIL,
    bool
  };
};

export const featchPersonPostSuccess = post => {
  return {
    type: FEATCH_PERSON_POST_SUCCESS,
    post
  };
};

// ACTIONS USER ALBUMS
export const featchPersonAlbums = bool => {
  return {
    type: FEATCH_PERSON_ALBUMS,
    bool
  };
};

export const featchPersonAlbumsError = bool => {
  return {
    type: FEATCH_PERSON_ALBUMS_FAIL,
    bool
  };
};

export const featchPersonAlbumsSuccess = albums => {
  return {
    type: FEATCH_PERSON_ALBUMS_SUCCESS,
    albums
  };
};

// ACTIONS ALBOM PHOTOS
export const featchAlbomPhotos = bool => {
  return {
    type: FEATCH_ALBUM_PHOTOS,
    bool
  };
};

export const featchAlbomPhotosError = bool => {
  return {
    type: FEATCH_ALBUM_PHOTOS_FAIL,
    bool
  };
};

export const featchAlbomPhotosSuccess = photos => {
  return {
    type: FEATCH_ALBUM_PHOTOS_SUCCESS,
    photos
  };
};
