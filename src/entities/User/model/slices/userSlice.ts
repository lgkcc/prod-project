import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
      state.auth = action.payload;
    },
    initialData: (state) => {
      const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
      if (user) {
        state.auth = user;
      }
    },
    logoutData: (state) => {
      state.auth = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
