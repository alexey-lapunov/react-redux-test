const BASE_URL = 'http://jsonplaceholder.typicode.com';

const getUsersUrl = () => `${BASE_URL}/users`;
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

export const getPosts = async () => {
  const posts = await getResourse(getPostsUrl());

  return posts;
};
