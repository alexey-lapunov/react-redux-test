import { getUser, getUserPosts, getPost } from '../../api/jsonplh';
import {
  featchPerson,
  featchPersonError,
  featchPersonSuccess,
  featchPersonPosts,
  featchPersonPostsError,
  featchPersonPostsSuccess,
  featchPersonPost,
  featchPersonPostError,
  featchPersonPostSuccess
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

const featchUserPost = id => {
  return async dispatch => {
    try {
      dispatch(featchPersonPost(true));
      const post = await getPost(id);

      dispatch(featchPersonPost(false));
      dispatch(featchPersonPostSuccess(post));
    } catch (errro) {
      dispatch(featchPersonPostError(true));
    }
  };
};

export { featchUser, featchUserPosts, featchUserPost };
