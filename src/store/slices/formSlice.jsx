import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    year: 0,
    month: 0,
    day: 0
  },
  reducers: {
    changeDay(state, action) {
      state.day = action.payload;
    },
    changeMonth(state, action) {
      state.month = action.payload;
    },
    changeYear(state, action) {
      state.year = action.payload;
    }
  }
});

export const { changeDay, changeMonth, changeYear } = formSlice.actions;
export const formReducer = formSlice.reducer;
