import {
  FEATCH_PERSON,
  FEATCH_PERSON_FAIL,
  FEATCH_PERSON_SUCCESS
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
