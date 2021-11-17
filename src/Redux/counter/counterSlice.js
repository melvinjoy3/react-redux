import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 57,
  },
  reducers: {
    increase_count: (state) => {
      state.value += 1;
    },
    decrement_count: (state) => {
      state.value -= 1;
    },
  },
});
export const { increase_count, decrement_count } = countSlice.actions;
export default countSlice.reducer;
