import {
  getPostsAPI,
  getPostByIdAPI,
  createPostAPI,
  updatePostAPI,
  deletePostByIdAPI,
} from "../../apis/index";
import { setPostSlice } from "../slice/post";
import {
  addPostSlice,
  deletePostSlice,
  editPostSlice,
  getPostsSlice,
} from "../slice/posts";
import {
  CREATE_POST,
  DELETE_POST_BY_ID,
  GET_POSTS,
  GET_POST_BY_ID,
  UPDATE_POST_BY_ID,
} from "../types";
import { put, takeEvery } from "redux-saga/effects";

export function* getPostsSaga() {
  const posts = yield getPostsAPI();
  yield put(getPostsSlice(posts.data));
}

export function* getPostByIdSaga(action) {
  yield getPostByIdAPI(action.id);
  yield put(setPostSlice(action.id));
}

export function* createPostSaga(action) {
  yield createPostAPI(action.post);
  yield put(addPostSlice(action.post));
}

export function* updatePostSaga(action) {
  yield updatePostAPI(action.post);
  yield put(editPostSlice(action.post));
}

export function* deletePostByIdSaga(action) {
  yield deletePostByIdAPI(action.id);
  yield put(deletePostSlice(action.id));
}

export function* watchPostAsync() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST_BY_ID, getPostByIdSaga);
  yield takeEvery(CREATE_POST, createPostSaga);
  yield takeEvery(UPDATE_POST_BY_ID, updatePostSaga);
  yield takeEvery(DELETE_POST_BY_ID, deletePostByIdSaga);
}
