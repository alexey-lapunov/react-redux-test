import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAIL,
  FETCH_PEOPLE_SUCCESS
} from './constants';

const fetchPeople = bool => {
  return {
    type: FETCH_PEOPLE,
    bool
  };
};

const fetchPeopleFail = text => {
  return {
    type: FETCH_PEOPLE_FAIL,
    text
  };
};

const fetchPeopleSuccess = users => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    users
  };
};

export { fetchPeople, fetchPeopleFail, fetchPeopleSuccess };
