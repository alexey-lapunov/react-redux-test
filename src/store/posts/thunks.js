import { getPost, getPosts } from './../../api/jsonplh';
import {
  featchPosts,
  featchPostsError,
  featchPostsSuccess,
  featchPost,
  featchPostError,
  featchPostSuccess
} from './actions';

export const featchPostsThunk = () => {
  return async dispatch => {
    try {
      dispatch(featchPosts(true));

      const posts = await getPosts();

      dispatch(featchPostsSuccess(posts));
      dispatch(featchPosts(false));
    } catch {
      dispatch(featchPosts(false));
      dispatch(featchPostsError('Егор posts'));
    }
  };
};

export const featchPostThunk = id => {
  return async dispatch => {
    try {
      dispatch(featchPost(true));

      const post = await getPost(id);

      dispatch(featchPostSuccess(post));
      dispatch(featchPost(false));
    } catch (error) {
      dispatch(featchPostError('Егор User Posts!'));
    }
  };
};
