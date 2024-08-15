
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN, SIGNUP,FORGETPASSWORD } from '../../config/urls';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login error:', errorData); 
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('Login response:', data); 
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, { rejectWithValue }) => {
    try {
      console.log('Sending registration request with:', user);
      const response = await fetch(SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration API error:', errorData);
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration API response:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

export const forgetPasswordEmail = createAsyncThunk(
  'auth/forgetPasswordEmail',
  async ({email}, { rejectWithValue }) => {
    try {
      const response = await fetch(FORGETPASSWORD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('ForgetPassword error:', errorData); 
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('ForgetPassword response:', data); 
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

