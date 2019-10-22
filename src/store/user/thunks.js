import {
  getUser,
  getUserPosts,
  getPost,
  getUserAlbums,
  getAlbomPhotos,
  getUserTodos
} from '../../api/jsonplh';
import {
  featchPerson,
  featchPersonError,
  featchPersonSuccess,
  featchPersonPosts,
  featchPersonPostsError,
  featchPersonPostsSuccess,
  featchPersonPost,
  featchPersonPostError,
  featchPersonPostSuccess,
  featchPersonAlbums,
  featchPersonAlbumsError,
  featchPersonAlbumsSuccess,
  featchAlbomPhotos,
  featchAlbomPhotosError,
  featchAlbomPhotosSuccess,
  featchPersonTodos,
  featchPersonTodosError,
  featchPersonTodosSuccess
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

      return posts;
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
    } catch (error) {
      dispatch(featchPersonPostError(true));
    }
  };
};

const featchUserAlbums = id => {
  return async dispatch => {
    try {
      dispatch(featchPersonAlbums(true));
      const albums = await getUserAlbums(id);

      dispatch(featchPersonAlbums(false));
      dispatch(featchPersonAlbumsSuccess(albums));
    } catch (error) {
      dispatch(featchPersonAlbumsError(true));
    }
  };
};

const featchUserAlbomPhotos = id => {
  return async dispatch => {
    try {
      dispatch(featchAlbomPhotos(true));
      const photos = await getAlbomPhotos(id);

      dispatch(featchAlbomPhotos(false));
      dispatch(featchAlbomPhotosSuccess(photos));
    } catch (error) {
      dispatch(featchAlbomPhotosError(true));
    }
  };
};

const featchUserTodos = id => {
  return async dispatch => {
    try {
      dispatch(featchPersonTodos(true));
      const todos = await getUserTodos(id);

      dispatch(featchPersonTodos(false));
      dispatch(featchPersonTodosSuccess(todos));
    } catch (error) {
      dispatch(featchPersonTodosError(true));
    }
  };
};

export {
  featchUser,
  featchUserPosts,
  featchUserPost,
  featchUserAlbums,
  featchUserAlbomPhotos,
  featchUserTodos
};
