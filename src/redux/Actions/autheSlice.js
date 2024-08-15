
import { createSlice } from '@reduxjs/toolkit';
import { loginUser,registerUser,forgetPasswordEmail } from './action';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('Login pending...');
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        console.log('Login fulfilled:', action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
        console.error('Login rejected:', action.payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('Registration pending...');
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        console.log('Registration fulfilled:', action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
        console.error('Registration rejected:', action.payload);
      })
      .addCase(forgetPasswordEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('ForgetPassword pending...');
      })
      .addCase(forgetPasswordEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        console.log('ForgetPassword fulfilled:', action.payload);
      })
      .addCase(forgetPasswordEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'ForgetPassword failed';
        console.error('ForgetPassword rejected:', action.payload);
      });
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
