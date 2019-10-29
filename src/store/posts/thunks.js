import { getPosts } from './../../api/jsonplh';
import { featchPosts, featchPostError, featchPostSuccess } from './actions';

export const featchPostsThunk = () => {
  return async dispatch => {
    try {
      dispatch(featchPosts(true));

      const posts = await getPosts();

      dispatch(featchPostSuccess(posts));
      dispatch(featchPosts(false));
    } catch {
      dispatch(featchPosts(false));
      dispatch(featchPostError('Егор posts'));
    }
  };
};

// export const featchPostThunk = id => {
//   return async dispatch => {
//     try {
//       dispatch(featchPersonPosts(true));

//       const posts = await getUserPosts(id);

//       dispatch(featchPersonPosts(false));
//       dispatch(featchPersonPostsSuccess(posts));

//       return posts;
//     } catch (error) {
//       dispatch(featchPersonPostsError('Егор User Posts!'));
//     }
//   };
// };
