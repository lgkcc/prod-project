import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';

interface LoginByUsernameProps {
  login: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(userActions.setUserData(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
