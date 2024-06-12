import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import postsSlice from "../slices/postsSlice";
import selectedMonthSlice from "../slices/selectedMonthSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    selectedMonth: selectedMonthSlice,
    auth: authSlice,
  },
});

export default store;
