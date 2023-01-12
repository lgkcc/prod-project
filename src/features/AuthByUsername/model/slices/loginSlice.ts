import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
  login: '',
  password: '',
  status: 'initial',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.status = 'loading';
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.status = 'success';
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
