import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN, REGISTER } from '../../config/urls';

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
  async ({ firstName, lastName, gender, dateOfBirth, email, countryCode, phone, password, role }, { rejectWithValue }) => {
    try {
      const response = await fetch(REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, gender, dateOfBirth, email, countryCode, phone, password, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration error:', errorData); 
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration response:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

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
      });
  },
});

export const { logout, setToken } = authSlice.actions;

export default authSlice.reducer;
