
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Actions/autheSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
  
  },

});
