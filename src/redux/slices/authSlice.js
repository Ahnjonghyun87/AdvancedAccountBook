import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    loginAuth(state, action) {
      state.isAuthenticated = true;
      localStorage.setItem("accessToken", action.payload); // 엑세스 토큰 저장
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken"); // 엑세스 토큰 삭제
    },
  },
});

export const { loginAuth, logout } = authSlice.actions;
export default authSlice.reducer;
