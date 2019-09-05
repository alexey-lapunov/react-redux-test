import { getUser } from '../../api/jsonplh';
import { featchUser, featchUserError, featchUserSuccess } from './action';

export const featchUser = id => {
  return async dispatch => {
    try {
      dispatch(featchUser(true));

      const user = await getUser(id);

      dispatch(featchUser(false));
      dispatch(featchUserSuccess(user));

      return user;
    } catch (error) {
      dispatch(featchUserError('Егор User!'));
    }
  };
};
