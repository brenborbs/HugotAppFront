import fetch from "isomorphic-fetch";
import { API } from "../config";
import QueryString from "querystring";
import { isAuth, handleResponse } from "./auth";

export const createPost = (post, token) => {
  let createPostEndpoint;

  if (isAuth() && isAuth().role === 1) {
    createPostEndpoint = `${API}/post`;
  } else if (isAuth() && isAuth().role === 0) {
    createPostEndpoint = `${API}/user/post`;
  }

  return fetch(`${createPostEndpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(response => {
      handleResponse(response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listPostsWithCategoriesAndTags = (skip, limit) => {
  const data = {
    limit,
    skip
  };
  return fetch(`${API}/posts-categories-tags`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const singlePost = slug => {
  return fetch(`${API}/post/${slug}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listRelated = post => {
  return fetch(`${API}/posts/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const list = username => {
  let listPostsEndpoint;

  if (username) {
    listPostsEndpoint = `${API}/${username}/posts`;
  } else {
    listPostsEndpoint = `${API}/posts`;
  }

  return fetch(`${listPostsEndpoint}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const removePost = (slug, token) => {
  let deletePostEndpoint;

  if (isAuth() && isAuth().role === 1) {
    deletePostEndpoint = `${API}/post/${slug}`;
  } else if (isAuth() && isAuth().role === 0) {
    deletePostEndpoint = `${API}/user/post/${slug}`;
  }

  return fetch(`${deletePostEndpoint}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      handleResponse(response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const updatePost = (post, token, slug) => {
  let updatePostEndpoint;

  if (isAuth() && isAuth().role === 1) {
    updatePostEndpoint = `${API}/post/${slug}`;
  } else if (isAuth() && isAuth().role === 0) {
    updatePostEndpoint = `${API}/user/post/${slug}`;
  }

  return fetch(`${updatePostEndpoint}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(response => {
      handleResponse(response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listSearch = params => {
  console.log("search params", params);
  let query = QueryString.stringify(params); // value on search input at front-end
  console.log("query params", query);
  return fetch(`${API}/posts/search?${query}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
