import { getUsers } from '../../api/jsonplh';
import { fetchPeople, fetchPeopleFail, fetchPeopleSuccess } from './actions';

export const fetchUsersList = () => {
  return async dispatch => {
    try {
      dispatch(fetchPeople(true));

      const people = await getUsers();

      dispatch(fetchPeopleSuccess(people));
      dispatch(fetchPeople(false));

      return people;
    } catch (error) {
      dispatch(fetchPeople(false));
      dispatch(fetchPeopleFail('Егор Users!'));
    }
  };
};
