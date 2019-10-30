import * as C from './constants';

export const featchPosts = bool => ({
  type: C.FEATCH_POSTS,
  bool
});

export const featchPostsError = bool => ({
  type: C.FEATCH_POSTS_ERROR,
  bool
});

export const featchPostsSuccess = data => ({
  type: C.FEATCH_POSTS_SUCCESS,
  data
});

// active post

export const featchPost = bool => ({
  type: C.FEATCH_POST,
  bool
});

export const featchPostError = bool => ({
  type: C.FEATCH_POST_ERROR,
  bool
});

export const featchPostSuccess = data => ({
  type: C.FEATCH_POST_SUCCESS,
  data
});
