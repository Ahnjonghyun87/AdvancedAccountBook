import { combineReducers, createStore } from "@reduxjs/toolkit";
import addPosts from "../modules/addPosts";

//rootReducer 만듬
const rootReducer = combineReducers({
  addPosts,
});
//store 조합
const store = createStore(rootReducer);
//만든 store 내보냄

export default store;
