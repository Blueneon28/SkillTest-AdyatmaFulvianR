import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [
    {
      id: 0,
      title: "",
      body: "",
    },
  ],
  reducers: {
    getPostsSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addPostSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editPostSlice: (state, action) => {
      state = state.map((i) =>
        i.id == action.payload.id ? action.payload : i
      );
      return state;
    },
    deletePostSlice: (state, action) => {
      state = state.filter((i) => i.id !== action.payload);
      return state;
    },
  },
});

export const { getPostsSlice, addPostSlice, editPostSlice, deletePostSlice } =
  posts.actions;
export default posts.reducer;
