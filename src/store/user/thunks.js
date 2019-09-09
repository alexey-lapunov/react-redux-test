import { getUser } from '../../api/jsonplh';
import {
  featchPerson,
  featchPersonError,
  featchPersonSuccess
} from './actions';

const featchUser = id => {
  return async dispatch => {
    try {
      dispatch(featchPerson(true));

      const user = await getUser(id);

      dispatch(featchPerson(false));
      dispatch(featchPersonSuccess(user));
    } catch (error) {
      dispatch(featchPersonError('Егор User!'));
    }
  };
};

export { featchUser };
