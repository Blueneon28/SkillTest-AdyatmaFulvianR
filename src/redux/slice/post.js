import { createSlice } from "@reduxjs/toolkit";

const post = createSlice({
  name: "post",
  initialState: {
    id: 0,
    title: "",
    body: "",
  },
  reducers: {
    setPostSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setPostSlice } = post.actions;
export default post.reducer;
