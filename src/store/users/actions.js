import * as C from './constants';

const fetchPeople = bool => {
  return {
    type: C.FETCH_PEOPLE,
    bool
  };
};

const fetchPeopleFail = text => {
  return {
    type: C.FETCH_PEOPLE_FAIL,
    text
  };
};

const fetchPeopleSuccess = people => {
  return {
    type: C.FETCH_PEOPLE_SUCCESS,
    people
  };
};

export { fetchPeople, fetchPeopleFail, fetchPeopleSuccess };
