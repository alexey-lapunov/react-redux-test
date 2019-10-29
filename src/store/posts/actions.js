import {
  FEATCH_POSTS,
  FEATCH_POSTS_SUCCESS,
  FEATCH_POSTS_ERROR,
  FEATCH_POST,
  FEATCH_POST_SUCCESS,
  FEATCH_POST_ERROR
} from './constants';

export const featchPosts = bool => ({
  type: FEATCH_POSTS,
  bool
});

export const featchPostsError = bool => ({
  type: FEATCH_POSTS_ERROR,
  bool
});

export const featchPostsSuccess = data => ({
  type: FEATCH_POSTS_SUCCESS,
  data
});

// active post

export const featchPost = bool => ({
  type: FEATCH_POST,
  bool
});

export const featchPostError = bool => ({
  type: FEATCH_POST_ERROR,
  bool
});

export const featchPostSuccess = data => ({
  type: FEATCH_POST_SUCCESS,
  data
});
