import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../slices/postsSlice";
import selectedMonthSlice from "../slices/selectedMonthSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    selectedMonth: selectedMonthSlice,
  },
});

export default store;
