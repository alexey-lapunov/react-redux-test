const BASE_URL = 'http://jsonplaceholder.typicode.com';

const getUsersUrl = () => `${BASE_URL}/users`;
const getUserUrl = id => `${BASE_URL}/users/${id}]`;
const getPostsUrl = () => `${BASE_URL}/posts`;

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
