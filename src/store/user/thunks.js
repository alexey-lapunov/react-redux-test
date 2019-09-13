import { getUser, getUserPosts } from '../../api/jsonplh';
import {
  featchPerson,
  featchPersonError,
  featchPersonSuccess,
  featchPersonPosts,
  featchPersonPostsError,
  featchPersonPostsSuccess
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

const featchUserPosts = id => {
  return async dispatch => {
    try {
      dispatch(featchPersonPosts(true));

      const posts = await getUserPosts(id);

      dispatch(featchPersonPosts(false));
      dispatch(featchPersonPostsSuccess(posts));
    } catch (error) {
      dispatch(featchPersonPostsError('Егор User Posts!'));
    }
  };
};

export { featchUser, featchUserPosts };
