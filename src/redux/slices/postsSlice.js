import { postsSlice } from "reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    posts: (state, action) => {
      state.posts = state.posts + action.payload;
    },
    setPosts: (state, action) => {
      state.setPosts = state.setPosts + action.payload;
    },
  },
});

export const { posts, setPosts } = postsSlice.actions;
export default postsSlice.reducer;
