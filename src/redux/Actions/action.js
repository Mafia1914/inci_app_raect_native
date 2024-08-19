
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN, SIGNUP,FORGETPASSWORD ,VERIFYOPT,RESETPASSWORD} from '../../config/urls';

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
        body: JSON.stringify({ email }),
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
      console.error('ForgetPassword caught error:', error);
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);



export const VerifyOTP = createAsyncThunk(
  'auth/VerifyOTP',
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      console.log('Sending OTP verification request with:', { email, otp });
      const response = await fetch(VERIFYOPT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Verify OTP error:', errorData);
        return rejectWithValue(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('Verify OTP response:', data);
      return data;
    } catch (error) {
      console.error('Verify OTP caught error:', error);
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);



export const ResetPassword = createAsyncThunk(
  'auth/ResetPassword',
  async ({ email, password, token }, { rejectWithValue }) => {
    try {
      console.log('Sending ResetPassword request with:', { email, password, token });
      const response = await fetch(RESETPASSWORD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, token }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('ResetPassword error:', errorData);
        return rejectWithValue(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('ResetPassword response:', data);
      return data;
    } catch (error) {
      console.error('ResetPassword caught error:', error);
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);




