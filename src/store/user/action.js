import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAIL,
  FETCH_PEOPLE_SUCCESS
} from './constants';

export const featchUser = bool => {
  return {
    type: FETCH_PEOPLE,
    bool
  };
};

export const featchUserError = text => {
  return {
    type: FETCH_PEOPLE_FAIL,
    text
  };
};

export const featchUserSuccess = user => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    user
  };
};
