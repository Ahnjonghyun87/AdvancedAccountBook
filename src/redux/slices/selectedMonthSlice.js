import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMonth: JSON.parse(localStorage.getItem("selectedMonth")) || 1,
};

const selectedMonthSlice = createSlice({
  name: "selectedMonth",
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
      localStorage.setItem(
        "selectedMonth",
        JSON.stringify(state.selectedMonth)
      );
    },
  },
});

export const { setSelectedMonth } = selectedMonthSlice.actions;
export default selectedMonthSlice.reducer;
