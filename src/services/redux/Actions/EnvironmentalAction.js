import { configureStore } from '@reduxjs/toolkit';
import environmentReducer from '../Reducers/EnvironmentalSlice';

export const store = configureStore({
  reducer: {
    environment: environmentReducer,
    // Add other reducers here...
  },
});