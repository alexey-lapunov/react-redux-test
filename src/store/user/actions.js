import {
  FEATCH_PERSON,
  FEATCH_PERSON_FAIL,
  FEATCH_PERSON_SUCCESS,
  FEATCH_PERSON_POSTS,
  FEATCH_PERSON_POSTS_FAIL,
  FEATCH_PERSON_POSTS_SUCCESS,
  ON_SHOW_MODAL_POST
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

export const onOpenModalPost = bool => {
  console.log(bool);
  return {
    type: ON_SHOW_MODAL_POST,
    bool
  };
};
