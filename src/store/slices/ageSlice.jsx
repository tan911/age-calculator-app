import { createSlice } from '@reduxjs/toolkit';

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    calcAge: []
  },
  reducers: {
    calculate(state, action) {
      const now = new Date();

      let DAY_VALUE, MONTH_VALUE, YEAR_VALUE;

      const YEAR_INPUT = action.payload.year;
      const MONTH_INPUT = action.payload.month;
      const DAY_INPUT = action.payload.day;

      let YEAR = now.getFullYear();
      let MONTH = now.getMonth() + 1;
      let DAY = now.getDate();

      if (DAY < DAY_INPUT) {
        DAY_VALUE = DAY - DAY_INPUT + 30;
        MONTH -= 1;
      } else {
        DAY_VALUE = DAY - DAY_INPUT;
      }

      if (MONTH < MONTH_INPUT) {
        MONTH_VALUE = MONTH - MONTH_INPUT + 12;
        YEAR -= 1;
      } else {
        MONTH_VALUE = MONTH - MONTH_INPUT;
      }

      YEAR_VALUE = YEAR - YEAR_INPUT;

      const output = [
        {
          year: Math.abs(YEAR_VALUE),
          month: Math.abs(MONTH_VALUE),
          day: Math.abs(DAY_VALUE)
        }
      ];
      state.calcAge = output;
    }
  }
});

export const { calculate } = ageSlice.actions;
export const ageReducer = ageSlice.reducer;
