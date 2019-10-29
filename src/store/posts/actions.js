import {
  FEATCH_POSTS,
  FEATCH_POSTS_SUCCESS,
  FEATCH_POSTS_ERROR
} from './constants';

export const featchPosts = bool => ({
  type: FEATCH_POSTS,
  bool
});

export const featchPostError = bool => ({
  type: FEATCH_POSTS_ERROR,
  bool
});

export const featchPostSuccess = data => ({
  type: FEATCH_POSTS_SUCCESS,
  data
});
