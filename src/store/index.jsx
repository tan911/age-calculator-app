import { configureStore } from '@reduxjs/toolkit';
import { formReducer, changeDay, changeMonth, changeYear } from './slices/formSlice';
import { ageReducer, calculate } from './slices/ageSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    calc: ageReducer
  }
});

export { store, changeDay, changeMonth, changeYear, calculate };
