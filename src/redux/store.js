import { configureStore } from "@reduxjs/toolkit";
import post from "./slice/post";
import posts from "./slice/posts";

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    post,
    posts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
