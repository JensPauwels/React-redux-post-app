import { FETCH_POSTS, NEW_POST } from "./types";

const state = (type, payload) => ({
  type,
  payload
});

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => dispatch(state(FETCH_POSTS, posts)));
};

export const createPost = postData => dispatch => {
  const headers = {
    "content-type": "application/json"
  };

  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(res => res.json())
    .then(post => dispatch(state(NEW_POST, post)));
};
