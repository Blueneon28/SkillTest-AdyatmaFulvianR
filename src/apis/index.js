import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getPostsAPI = async () => axios.get(`/posts`);

export const getPostByIdAPI = async (id) => axios.get(`/posts/${id}`);

export const createPostAPI = async (post) => axios.post(`/posts`, post);

export const updatePostAPI = async (post) =>
  axios.put(`/posts/${post.id}`, post);

export const deletePostByIdAPI = async (id) => axios.delete(`/posts/${id}`);
