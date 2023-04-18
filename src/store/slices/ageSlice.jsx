import { createSlice } from '@reduxjs/toolkit';

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    calcAge: []
  },
  reducers: {
    calculate(state, action) {
      const output = [
        {
          year: Math.abs(action.payload.year),
          month: Math.abs(action.payload.month),
          day: Math.abs(action.payload.day)
        }
      ];
      state.calcAge = output;
    }
  }
});

export const { calculate } = ageSlice.actions;
export const ageReducer = ageSlice.reducer;
