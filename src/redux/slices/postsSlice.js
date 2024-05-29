import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
        localStorage.setItem("posts", JSON.stringify(state.posts));
      } //수정버튼
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    }, //삭제버튼
  },
});

export const { addPosts, setPosts, deletePost, updatePost } =
  postsSlice.actions;
export default postsSlice.reducer;
