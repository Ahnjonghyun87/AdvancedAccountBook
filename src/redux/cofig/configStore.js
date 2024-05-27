import { combineReducers, createStore } from "@reduxjs/toolkit";

//rootReducer 만듬
const rootReducer = combineReducers({});
//store 조합
const store = createStore(rootReducer);
//만든 store 내보냄

export default store;
