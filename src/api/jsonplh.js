const BASE_URL = 'http://jsonplaceholder.typicode.com';

const getUsersUrl = () => `${BASE_URL}/users`;
const getUserUrl = id => `${BASE_URL}/users/${id}`;
const getPostsUrl = () => `${BASE_URL}/posts`;
const getPostUrl = id => `${BASE_URL}/posts/${id}`;
const getUserPostsUrl = id => `${BASE_URL}/posts?userId=${id}`;
//const getAlbums = () => `${BASE_URL}/albums`;
const getUserAlbumsUrl = id => `${BASE_URL}/albums?userId=${id}`;
//const getPhotos = () => `${BASE_URL}/photos`;
//const getUserPhotoUrl = id => `${BASE_URL}/photos?userId=${id}`;

const getResourse = async url => {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw Error(response.statusText);
  }

  const data = await response.json();

  return data;
};

export const getUsers = async () => {
  const users = await getResourse(getUsersUrl());

  return users;
};

export const getUser = async id => {
  const user = await getResourse(getUserUrl(id));

  return user;
};

export const getPosts = async () => {
  const posts = await getResourse(getPostsUrl());

  return posts;
};

export const getPost = async id => {
  const post = await getResourse(getPostUrl(id));

  return post;
};

export const getUserPosts = async id => {
  const posts = await getResourse(getUserPostsUrl(id));

  return posts;
};

export const getUserAlbums = async id => {
  const albums = await getResourse(getUserAlbumsUrl(id));

  return albums;
};
